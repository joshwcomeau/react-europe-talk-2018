export type Particle = {
  birth: number,
  initialPosition: [number, number],
  currentPosition: [number, number],
  spin: number,
  twist: number,
  angle: number,
  scale: number,
  vx: number,
  vy: number,
  front: HTMLElement,
  back: HTMLElement,
  width: number,
  height: number,
};

export type Shape = {
  front: HTMLImageElement,
  back: HTMLImageElement,
};
