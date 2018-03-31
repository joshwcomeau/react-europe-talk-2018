import React, { Component } from 'react';

import {
  random,
  sample,
  getDiameter,
} from './Confetti.helpers';

import Canvas from '../Canvas';

import type {
  Particle,
  Shape,
} from './types.js';

export type Props = {
  width: number,
  height: number,
  particles: Array<Particle>,
  onClick?: () => void,
};

window.confTimes = [];

class Confetti extends Component<Props> {
  draw = ctx => {
    const {
      width,
      height,
      particles,
    } = this.props;

    const start = performance.now();

    ctx.clearRect(0, 0, width, height);

    particles.forEach(particle => {
      // Apply its new position, in terms of cartesian coordinates.
      ctx.translate(
        particle.currentPosition.x,
        particle.currentPosition.y
      );

      // Apply its new Z-axis (2D) rotation (how much spin is currently
      // applied?)
      ctx.rotate(particle.currentSpin);

      // Apply its new X-axis (3D rotation), and figure out whether it's
      // "backwards" right now.
      const imageElem =
        particle.currentTwist >= 0
          ? particle.front
          : particle.back;

      ctx.scale(particle.currentTwist, 1);

      // Draw the image into the context, applying the right scale and
      // position so that it's in the right place.
      ctx.drawImage(
        imageElem,
        imageElem.naturalWidth *
          particle.scale *
          -0.5,
        imageElem.naturalHeight *
          particle.scale *
          -0.5,
        imageElem.naturalWidth *
          particle.scale,
        imageElem.naturalHeight *
          particle.scale
      );

      // Undo all of our transformations, so that our context is restored.
      const ratio =
        window.devicePixelRatio || 1;

      ctx.setTransform(
        ratio,
        0,
        0,
        ratio,
        0,
        0
      );
    });

    window.confTimes.push(
      performance.now() - start
    );
  };

  render() {
    const {
      width,
      height,
      onClick,
    } = this.props;

    return (
      <Canvas
        width={width}
        height={height}
        draw={this.draw}
        ref={(node: HTMLCanvasElement) =>
          (this.canvas = node)
        }
        onClick={onClick}
      />
    );
  }
}

export default Confetti;
