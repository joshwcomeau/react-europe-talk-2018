import React, { Component } from 'react';

import { random, sample, getDiameter } from './Confetti.helpers';

import Canvas from '../Canvas';

import type { Particle, Shape } from './types.js';

const PIXEL_RATIO = window.devicePixelRatio || 1;

export type Props = {
  // The width of the HTML canvas. No default value provided.
  width: number,
  // The height of the HTML canvas. No default value provided.
  height: number,

  // An array of shapes, used when generating particles
  // (each item provided has an equal chance of being selected as a
  // particle)
  shapes: Array<Shape>,

  // The number of particles to generate, spread over the
  // `emitDuration` length.
  numParticles: number,

  // The amount of downward acceleration to provide.
  // Range: 10 = very slow, 10,000 = very fast.
  gravity: number,
  // The amount of Z-axis (2D) rotation to provide to each particle.
  // Each particle has a random number specified, between 0 and n.
  // Range: 0 = no spin, 10 = reasonable spin, 100 = pukeville
  spin: number,
  // The amount of X-axis (3D) rotation to provide to each particle.
  // Each particle has a random number specified, between 0 and n.
  // Range: 0 = no twist, 10 = reasonable twist, 100 = hummingbird
  twist: number,

  // Each particle will have a random speed assigned, contained by
  // `minSpeed` and `maxSpeed`.
  // This is the base speed, which is affected by `gravity`.
  minSpeed: number,
  maxSpeed: number,
  // Each particle will have a random size applied, contained by
  // `minScale` and `maxScale`. If you'd like all particles to retain
  // their original size, simply provide `1` for both values.
  minScale: number,
  maxScale: number,

  // Amount of time to spread the release of particles, in milliseconds.
  emitDuration: number,

  // Callback triggered when animation ends.
  // NOTE: Only fires when all particles are off-canvas. Retriggering
  // the confetti before it's completed will delay the handler.
  onComplete?: () => void,

  onClick?: () => void,
};

type State = {
  status: 'idle' | 'running',
  particles: Array<Particle>,
};

class Confetti extends Component<Props, State> {
  draw = ctx => {
    const { width, height, particles } = this.props;

    // TODO: PIXEL_RATIO?!
    ctx.clearRect(0, 0, width, height);

    // TODO: foreach?
    for (let i = 0; i < particles.length; i++) {
      const particle = particles[i];

      // Apply its new position, in terms of cartesian coordinates.
      ctx.translate(particle.currentPosition.x, particle.currentPosition.y);

      // Apply its new Z-axis (2D) rotation (how much spin is currently
      // applied?)
      ctx.rotate(particle.currentSpin);

      // Apply its new X-axis (3D rotation), and figure out whether it's
      // "backwards" right now.
      const imageElem =
        particle.currentTwist >= 0 ? particle.front : particle.back;

      ctx.scale(particle.currentTwist, 1);

      // Draw the image into the context, applying the right scale and
      // position so that it's in the right place.
      ctx.drawImage(
        imageElem,
        imageElem.naturalWidth * particle.scale * -0.5,
        imageElem.naturalHeight * particle.scale * -0.5,
        imageElem.naturalWidth * particle.scale,
        imageElem.naturalHeight * particle.scale
      );

      // Undo all of our transformations, so that our context is restored.
      ctx.setTransform(PIXEL_RATIO, 0, 0, PIXEL_RATIO, 0, 0);
    }
  };

  render() {
    const { width, height, onClick } = this.props;

    return (
      <Canvas
        width={width}
        height={height}
        draw={ctx => this.draw(ctx)}
        ref={(node: HTMLCanvasElement) => (this.canvas = node)}
        onClick={onClick}
      />
    );
  }
}

export default Confetti;
