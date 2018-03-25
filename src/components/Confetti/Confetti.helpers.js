// @flow
const hexRegex = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i;

type Color = {
  r: number,
  g: number,
  b: number,
  a: number,
};

export const random = (low: number, high: number) =>
  Math.random() * (high - low) + low;

export const sample = (array: Array<Shape>): Shape =>
  array[Math.floor(random(0, array.length))];

export const getDiameter = (width, height) =>
  Math.sqrt(width * width + height * height);

export const convertHexColorToRgb = color => {
  const match = color.match(hexRegex);
  if (match) {
    return {
      r: parseInt(match[1], 16) / 255,
      g: parseInt(match[2], 16) / 255,
      b: parseInt(match[3], 16) / 255,
      a: 1,
    };
  } else {
    throw new Error(`Failed to parse color: ${color}`);
  }
};

export const mix = (color: Color, background: Color) => ({
  r: color.r * color.a + background.r * (1 - color.a),
  g: color.g * color.a + background.g * (1 - color.a),
  b: color.b * color.a + background.b * (1 - color.a),
  a: 1,
});

export const mixWithBlack = (color: Color, amount: number) => {
  const black = { r: 0, g: 0, b: 0, a: amount };

  return mix(black, color);
};

export const mixWithWhite = (color: Color, amount: number) => {
  const white = { r: 1, g: 1, b: 1, a: amount };

  return mix(white, color);
};

// Stringify the color in an `rgba()` format.
export const formatRgbColor = (color: Color) =>
  'rgba(' +
  `${Math.floor(color.r * 255)}, ${Math.floor(color.g * 255)}, ` +
  `${Math.floor(color.b * 255)}, ${color.a.toFixed(2)})`;
