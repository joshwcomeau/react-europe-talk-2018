// @flow
import type { Point } from './WibblyWobblyCircle.types';

export function drawCurve(
  ctx: CanvasRenderingContext2D,
  curve: any,
  offset: Point
) {
  offset = offset || { x: 0, y: 0 };
  var ox = offset.x;
  var oy = offset.y;

  var p = curve.points,
    i;
  ctx.moveTo(p[0].x + ox, p[0].y + oy);

  ctx.bezierCurveTo(
    p[1].x + ox,
    p[1].y + oy,
    p[2].x + ox,
    p[2].y + oy,
    p[3].x + ox,
    p[3].y + oy
  );
}

export const randomizeWithinThreshold = (n: number, threshold: number) => {
  /** Tweak a given number by a random amount within a +/- threshold.
   * @example: randomizeWithinThreshold(10, 5)
   *    - Produces a random value between 5 and 15
   * @example: randomizeWithinThreshold(5, 1)
   *    - Produces a random value between 4.0 and 6.0
   */
  return n + Math.random() * threshold - threshold / 2;
};
