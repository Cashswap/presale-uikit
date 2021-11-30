import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#FEBF32",
  primaryBright: "#FEBF32",
  primaryDark: "#FEBF32",
  secondary: "#222531",
  success: "#FEBF32",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E7EDEA",
  contrast: "#17171A",
  invertedContrast: "#FFFFFF",
  input: "#e0effe",
  inputSecondary: "#D7CAEC",
  tertiary: "#EFF4F5",
  text: "#444CA8",
  textDisabled: "#BDC2C4",
  textSubtle: "#FFFFFF",
  borderColor: "#E9EAEB",
  navBackColor: "#3455FF",
  navPanelColor: "#FFFFFF",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#9A6AFF",
  background: "#17171A",
  backgroundDisabled: "#222531",
  contrast: "#FFFFFF",
  invertedContrast: "#191b1f",
  input: "#483f5a",
  inputSecondary: "#66578D",
  primaryDark: "#5d77ff",
  tertiary: "#353547",
  text: "#EAE2FC",
  textDisabled: "#4C516B",
  textSubtle: "#FEBF32",
  borderColor: "#524B63",
  navBackColor: "#3455ff",
  navPanelColor: "#ffffff",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
