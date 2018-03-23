export type Particle = {
    birth: number,
    x: number,
    y: number,
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
