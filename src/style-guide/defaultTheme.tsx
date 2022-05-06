import { Theme } from 'styled-system';

export interface Space {
  NONE: number;
  XS: number;
  S: number;
  M: number;
  L: number;
  XL: number;
  XXL: number;
}

export const space: Space = {
  NONE: 0,
  XS: 2,
  S: 4,
  M: 8,
  L: 16,
  XL: 32,
  XXL: 64,
};

export const breakpoints: string[] = ["319px", "424px", "767px", "1023px"];

export interface ThemeColors {
  primary: string;
  link: string;
  success: string;
  warning: string;
  error: string;
  heading: string;
  text: string;
  disabled: string;
  border: string;
}

export const colors: ThemeColors = {
  primary: "#423EA2",
  link: "#1890ff",
  success: "#52c41a",
  warning: "#faad14",
  error: "#e84118",
  heading: "#423EA2",
  text: "#000",
  disabled: "#f5222d",
  border: "#423EA2",
};

export const defaultTheme: Theme = {
  space: {
    ...space,
  },
  breakpoints,
  colors: {
    ...colors,
  },
};
