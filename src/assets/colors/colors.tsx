type ColorFunc = (opacity: number) => string;

const testColor = "rgba(0,200,0, 1)";

export const toRgba = (r: number, g: number, b: number, opacity: number) => {
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};
export const colors = {
  purple: {
    neon: (opacity: number) => toRgba(90, 0, 255, opacity),
    dark: (opacity: number) => toRgba(30, 0, 100, opacity),
  },
  black: {
    darkest: (opacity: number) => toRgba(5, 5, 5, opacity),
    darker: (opacity: number) => toRgba(10, 10, 10, opacity),
    dark: (opacity: number) => toRgba(15, 15, 15, opacity),
    light: (opacity: number) => toRgba(30, 30, 30, opacity),
  },
  white: {
    main: (opacity: number) => toRgba(100, 100, 100, opacity),
  },
  green: {
    neon: (opacity: number) => toRgba(0, 200, 0, opacity),
    main: (opacity: number) => toRgba(0, 100, 0, opacity),
    dark: (opacity: number) => toRgba(0, 50, 0, opacity),
  },
  red: {
    neon: (opacity: number) => toRgba(255, 0, 0, opacity),
    main: (opacity: number) => toRgba(100, 0, 0, opacity),
    dark: (opacity: number) => toRgba(50, 0, 0, opacity),
  },
  transparent: toRgba(0, 0, 0, 0),
};
