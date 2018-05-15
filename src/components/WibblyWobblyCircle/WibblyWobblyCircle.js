// @flow
import React, { Component } from 'react';
import Bezier from 'bezier-js';
import { Motion, spring } from 'react-motion';
import produce from 'immer';
import styled, { keyframes } from 'styled-components';

import { range, sample } from '../../utils';

import Canvas from '../Canvas';
import PointMotion from './PointMotion';

import {
  drawCurve,
  randomizeWithinThreshold,
} from './WibblyWobblyCircle.helpers';

import type { Points } from './WibblyWobblyCircle.types';

type Props = {
  size: number,
  padding: number,
  color: string,
  warbleStrength: number,
  renderTo: 'canvas' | 'svg',
};

type State = {
  points: Points,
};

class WibblyWobblyCircle extends Component<Props, State> {
  static defaultProps = {
    size: 400,
    padding: 40,
    color: 'palevioletred',
    warbleStrength: 1,
    renderTo: 'svg',
  };

  initialPoints: Points;
  animateTimeoutId: number;

  constructor(props: Props) {
    super(props);

    const { size, padding } = props;

    const cx = size / 2;
    const cy = size / 2;
    const radius = (size - 2 * padding) / 2;

    // We have a ✨ magic number ✨ used to allow bezier curves to approximate
    // circles. Roughly equal to 0.55228. Larger numbers make it square-ish,
    // smaller numbers make it diamond-ish.
    const k = 4 / 3 * (Math.sqrt(2) - 1);
    const kr = k * radius;

    this.initialPoints = [
      // First curve:
      { x: cx, y: padding },
      { x: cx + kr, y: padding },
      { x: size - padding, y: cy - kr },
      { x: size - padding, y: cy },
      // subsequent curve
      { x: size - padding, y: cy + kr },
      { x: cx + kr, y: size - padding },
      { x: cx, y: size - padding },
      // subsequent curve
      { x: cx - kr, y: size - padding },
      { x: padding, y: cy + kr },
      { x: padding, y: cy },
      // final curve control point
      { x: padding, y: cy - kr },
      { x: cx - kr, y: padding },
    ];

    this.state = { points: this.initialPoints };
  }

  componentDidMount() {
    this.animate();
  }

  componentWillUnmount() {
    window.clearTimeout(this.animateTimeoutId);
  }

  getRandomizedPointCoordinates = (pointIndex: number) => {
    /**
     * Get a new X/Y coordinate for a given point index.
     * The returned coordinate will be randomized, but within a certain
     * threshold of the point's original position.
     */
    const { size, warbleStrength } = this.props;

    // use the _original_ data, rather than the current data in this.state,
    // to ensure that our shape never distorts too much over time.
    const originalPoint = this.initialPoints[pointIndex];

    // Our "anchor" points can look jagged if we move them too far from their
    // original position. We still want to move 'em a bit, to keep the shape
    // looking dynamic, but we'll vary it by a smaller amount.
    // TODO: Make these points based on a prop, like "warbleStrength"?
    const isFixedPoint = pointIndex % 3 === 0;
    let variableAmount = isFixedPoint ? size * 0.02 : size * 0.075;

    // Consumers can make it warble more/less with the `warbleStrength` prop.
    variableAmount *= warbleStrength;

    return {
      x: randomizeWithinThreshold(originalPoint.x, variableAmount),
      y: randomizeWithinThreshold(originalPoint.y, variableAmount),
    };
  };

  animate = () => {
    const { size } = this.props;

    const pointIndexToMove = sample(range(0, this.state.points.length - 1));

    const nextState = produce(this.state, (draftState: State) => {
      // Start by moving the selected point by a random amount.
      const { x, y } = this.getRandomizedPointCoordinates(pointIndexToMove);
      draftState.points[pointIndexToMove].x = x;
      draftState.points[pointIndexToMove].y = y;

      // For our individual curves to behave naturally, though, we also need
      // to tweak the "cousin" point on the opposite curve.
      // More info: https://pomax.github.io/bezierinfo/#polybezier

      const {
        cousinIndex,
        x: cousinX,
        y: cousinY,
      } = this.calculateMovementEffectOnCousin(
        draftState.points,
        pointIndexToMove
      );

      if (typeof cousinIndex === 'number') {
        draftState.points[cousinIndex].x = cousinX;
        draftState.points[cousinIndex].y = cousinY;
      }

      // draftState.points[pointIndexToMove].x = newX;
    });
    this.setState(nextState, () => {
      // if (tick > 1) return;
      this.animateTimeoutId = window.setTimeout(
        this.animate,
        Math.random() * 200
      );
    });
  };

  calculateMovementEffectOnCousin = (
    points: Points,
    movingPointIndex: number
  ) => {
    const movingPoint = points[movingPointIndex];

    // Fixed points, at the cardinal tips, don't have any cousins;
    // they can move freely.
    if (movingPointIndex % 3 === 0) {
      return {};
    }

    let fixedIndex, cousinIndex;
    if (movingPointIndex % 3 === 1) {
      // For the first point in a curve, the cousin will be the second point
      // on the previous curve.
      fixedIndex = movingPointIndex - 1;
      fixedIndex += fixedIndex < 0 ? points.length : 0;
      cousinIndex = movingPointIndex - 2;
      cousinIndex += cousinIndex < 0 ? points.length : 0;
    } else {
      // For the second point in a curve, the cousin will be the first point
      // on the next curve.
      fixedIndex = (movingPointIndex + 1) % points.length;
      cousinIndex = (movingPointIndex + 2) % points.length;
    }

    const fixed = points[fixedIndex];
    const cousin = points[cousinIndex];

    // Trigonometry stuff that I got from a fantastic bezier guide:
    // https://pomax.github.io/bezierinfo/#polybezier
    //
    // TL:DR; we don't simply want to move cousin points 1:1 with the moving
    // point. We want to make them follow the same angle, but we no longer care
    // about vector length.
    const a = Math.atan2(fixed.y - movingPoint.y, fixed.x - movingPoint.x);
    const dx = cousin.x - fixed.x;
    const dy = cousin.y - fixed.y;
    const d = Math.sqrt(dx * dx + dy * dy);

    const x = fixed.x + d * Math.cos(a);
    const y = fixed.y + d * Math.sin(a);

    return { cousinIndex, x, y };
  };

  renderToCanvas = ({ points }: { points: Points }) => {
    const { size, color } = this.props;

    return (
      <Canvas
        width={size}
        height={size}
        draw={(canvas, ctx) => {
          // Our `draw` is called on every frame, so the first order of
          // business is to clear the previous frame's circle.
          ctx.clearRect(0, 0, size, size);

          ctx.beginPath();

          // Draw our 4 curves to simulate a circle
          var c1 = new Bezier(points[0], points[1], points[2], points[3]);
          drawCurve(ctx, c1);
          var c2 = new Bezier(points[3], points[4], points[5], points[6]);
          drawCurve(ctx, c2);
          var c3 = new Bezier(points[6], points[7], points[8], points[9]);
          drawCurve(ctx, c3);
          var c4 = new Bezier(points[9], points[10], points[11], points[0]);
          drawCurve(ctx, c4);

          // Our current path makes up the 4 "slices" of the arcs, but we have a
          // large diamond shape left blank in the middle of our circle.
          // Fill that in with a simple path.
          ctx.moveTo(points[0].x, points[0].y);
          ctx.lineTo(points[3].x, points[3].y);
          ctx.lineTo(points[6].x, points[6].y);
          ctx.lineTo(points[9].x, points[9].y);
          ctx.closePath();

          ctx.fillStyle = color;
          ctx.fill();
        }}
      />
    );
  };

  renderToSvg = ({ points }: { points: Points }) => {
    const p = points;
    return (
      <svg width={this.props.size} height={this.props.size}>
        <path
          fill={this.props.color}
          d={`
            M ${p[0].x} ${p[0].y}
            C ${p[1].x} ${p[1].y}, ${p[2].x} ${p[2].y}, ${p[3].x} ${p[3].y}
            C ${p[4].x} ${p[4].y}, ${p[5].x} ${p[5].y}, ${p[6].x} ${p[6].y}
            C ${p[7].x} ${p[7].y}, ${p[8].x} ${p[8].y}, ${p[9].x} ${p[9].y}
            C ${p[10].x} ${p[10].y}, ${p[11].x} ${p[11].y}, ${p[0].x} ${p[0].y}
          `}
        />
      </svg>
    );
  };

  render() {
    return (
      <Wrapper>
        <PointMotion
          initialPoints={this.initialPoints}
          points={this.state.points}
        >
          {this.props.renderTo === 'canvas'
            ? this.renderToCanvas
            : this.renderToSvg}
        </PointMotion>
      </Wrapper>
    );
  }
}

const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div`
  /* A bit of slow rotation helps sell the effect */
  animation: ${rotation} 10s linear infinite;
`;

export default WibblyWobblyCircle;
