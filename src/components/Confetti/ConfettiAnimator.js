// @flow
import React, { PureComponent } from 'react';

import { random, sample, getDiameter } from './Confetti.helpers';
import {
  createCircle,
  createTriangle,
  createZigZag,
} from './confetti-shapes.js';

import type { Particle } from './types.js';

type State = {
  particles: Array<Particle>,
  status: 'idle' | 'running',
};
type Props = {
  width: number,
  height: number,
  children: (state: State) => any,
};

const PIXEL_RATIO = window.devicePixelRatio || 1;

class ConfettiAnimator extends PureComponent<Props, State> {
  static defaultProps = {
    shapes: [
      createZigZag({ fill: '#ca337c' }), // Pink
      createZigZag({ fill: '#01d1c1' }), // Turquoise
      createZigZag({ fill: '#f4d345' }), // Yellow
      createCircle({ fill: '#63d9ea' }), // Blue
      createCircle({ fill: '#ed5fa6' }), // Pink
      createCircle({ fill: '#aa87ff' }), // Purple
      createCircle({ fill: '#26edd5' }), // Turquoise
      createTriangle({ fill: '#ed5fa6' }), // Pink
      createTriangle({ fill: '#aa87ff' }), // Purple
      createTriangle({ fill: '#26edd5' }), // Turquoise
    ],
    numParticles: 160,
    gravity: 1600,
    spin: 20,
    twist: 0,
    minSpeed: 225,
    maxSpeed: 675,
    minScale: 0.4,
    maxScale: 1.0,
    // By default emit all particles at once.
    emitDuration: 1000,
  };

  state = {
    particles: [],
    status: 'idle',
  };

  generateParticles = () => {
    if (this.props.shapes.length === 0) {
      return;
    }

    const deviceSpecificWidth = this.props.width * PIXEL_RATIO;

    let particles = [...this.state.particles];

    for (let i = 0; i < this.props.numParticles; i++) {
      const speed = random(this.props.minSpeed, this.props.maxSpeed);

      // Select a random direction offset to be used.
      // Controls how far left/right a given piece will move from its origin.
      const directionOffset = -Math.PI / 2 + 0.7 * random(-0.5, 0.5);

      const { front, back } = sample(this.props.shapes);

      const initialPosition = {
        // TODO: -1 to 1?
        x: random(-0.5, 0.5) * deviceSpecificWidth,
        y: 0,
      };

      particles.push({
        birth: Date.now() + random(0, this.props.emitDuration),
        initialPosition,
        currentPosition: initialPosition,
        spinForce: this.props.spin * random(-0.5, 0.5),
        currentSpin: 0,
        twistForce: this.props.twist * random(-0.5, 0.5),
        currentTwist: 0,
        angle: random(0, 2 * Math.PI),
        scale: random(this.props.minScale, this.props.maxScale),
        vx: Math.cos(directionOffset) * speed,
        vy: Math.sin(directionOffset) * speed * -1,
        front,
        back,
        width: front.naturalWidth,
        height: front.naturalHeight,
      });
    }

    if (this.state.status === 'idle') {
      this.tick();
    }

    this.setState({ particles, status: 'running' });
  };

  tick = () => {
    window.requestAnimationFrame(() => {
      const particles = this.calculateNextPositionForParticles();

      this.setState({ particles }, this.tick);
    });
  };

  calculateNextPositionForParticles = () => {
    const now = Date.now();
    const { height, width } = this.props;

    if (this.state.status === 'idle') {
      return;
    }

    let particles = [...this.state.particles];

    // TODO: maybe try this as `particles.map`?
    for (let i = 0; i < particles.length; i++) {
      const particle = particles[i];
      const age = (now - particle.birth) / 1000;

      // Skip a particle if it hasn't been born yet.
      if (age < 0) {
        continue;
      }

      const x = particle.initialPosition.x + particle.vx * age;
      const y =
        particle.initialPosition.y +
        particle.vy * age +
        this.props.gravity * age * age / 2;

      const diameter = getDiameter(
        particle.width * particle.scale,
        particle.height * particle.scale
      );

      const isOffScreen =
        x + diameter < 0 || x - diameter > width || y - diameter > height;

      if (isOffScreen) {
        // Remove off-screen particles
        // TODO (josh): Mutating an array that is being iterated through
        // is risky business. Should be refactored.
        if (i === particles.length - 1) {
          particles.pop();
        } else {
          particles[i] = particles.pop();
          i--;
        }

        continue;
      }

      particle.currentPosition = { x, y };

      // Apply its new Z-axis (2D) rotation (how much spin is currently
      // applied?)
      particle.currentSpin = particle.angle + particle.spinForce * age;

      // Apply its new X-axis (3D rotation), and figure out whether it's
      // "backwards" right now.
      particle.currentTwist = particle.twistForce
        ? Math.cos(particle.angle + particle.twistForce * age)
        : 1;
    }

    return particles;
  };

  render() {
    return this.props.children(this.state);
  }
}

export default ConfettiAnimator;
