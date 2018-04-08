// @flow
/**
 * Yikes this file is gross!
 *
 * <Motion>, from React Motion, expects a 'flat' variable structure for the
 * things it tweens. Our "Point" data model is nested, though: an array of
 * {x, y} coordinate objects.
 *
 * This file just handles the data-munging so that externally, it can be used
 * with {x, y} coordinate objects. It's a domain-specific wrapper around
 * React Motion, to simplify the math in <WibblyWobblyCircle />
 */
import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';

import type { Points } from './WibblyWobblyCircle.types';

type ChildrenArgs = { points: Points };
type Props = {
  points: Points,
  initialPoints: Points,
  children: (args: ChildrenArgs) => React$Node,
};

const springParams = {
  stiffness: 7,
  damping: 2,
};

const PointMotion = ({ points, initialPoints, children }: Props) => (
  <Motion
    defaultStyle={{
      y0: points[0].y,
      x0: points[0].x,
      x1: points[1].x,
      y1: points[1].y,
      x2: points[2].x,
      y2: points[2].y,
      x3: points[3].x,
      y3: points[3].y,
      x4: points[4].x,
      y4: points[4].y,
      x5: points[5].x,
      y5: initialPoints[5].y,
      x6: initialPoints[6].x,
      y6: initialPoints[6].y,
      x7: initialPoints[7].x,
      y7: initialPoints[7].y,
      x8: initialPoints[8].x,
      y8: initialPoints[8].y,
      x9: initialPoints[9].x,
      y9: initialPoints[9].y,
      x10: initialPoints[10].x,
      y10: initialPoints[10].y,
      x11: initialPoints[11].x,
      y11: initialPoints[11].y,
    }}
    style={{
      y0: spring(points[0].y, springParams),
      x0: spring(points[0].x, springParams),
      x1: spring(points[1].x, springParams),
      y1: spring(points[1].y, springParams),
      x2: spring(points[2].x, springParams),
      y2: spring(points[2].y, springParams),
      x3: spring(points[3].x, springParams),
      y3: spring(points[3].y, springParams),
      x4: spring(points[4].x, springParams),
      y4: spring(points[4].y, springParams),
      x5: spring(points[5].x, springParams),
      y5: spring(points[5].y, springParams),
      x6: spring(points[6].x, springParams),
      y6: spring(points[6].y, springParams),
      x7: spring(points[7].x, springParams),
      y7: spring(points[7].y, springParams),
      x8: spring(points[8].x, springParams),
      y8: spring(points[8].y, springParams),
      x9: spring(points[9].x, springParams),
      y9: spring(points[9].y, springParams),
      x10: spring(points[10].x, springParams),
      y10: spring(points[10].y, springParams),
      x11: spring(points[11].x, springParams),
      y11: spring(points[11].y, springParams),
    }}
  >
    {({
      x0,
      y0,
      x1,
      y1,
      x2,
      y2,
      x3,
      y3,
      x4,
      y4,
      x5,
      y5,
      x6,
      y6,
      x7,
      y7,
      x8,
      y8,
      x9,
      y9,
      x10,
      y10,
      x11,
      y11,
    }) =>
      // React Motion isn't happy that we're "doubling" the children functions.
      // It expects its children function to return a ReactElement, not another
      // function call. This is fine, though, since our `children` call does
      // eventually return a React Element.
      // $FlowFixMe
      children({
        points: [
          { x: x0, y: y0 },
          { x: x1, y: y1 },
          { x: x2, y: y2 },
          { x: x3, y: y3 },
          { x: x4, y: y4 },
          { x: x5, y: y5 },
          { x: x6, y: y6 },
          { x: x7, y: y7 },
          { x: x8, y: y8 },
          { x: x9, y: y9 },
          { x: x10, y: y10 },
          { x: x11, y: y11 },
        ],
      })
    }
  </Motion>
);

export default PointMotion;
