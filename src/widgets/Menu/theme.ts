import { darkColors, lightColors } from "../../theme/colors";
import { NavTheme } from "./types";

export const light: NavTheme = {
  background: lightColors.background,
  panelColor: lightColors.background,
  footColor: lightColors.background,
  hover: "#e0effe",
};

export const dark: NavTheme = {
  background: darkColors.background,
  panelColor: darkColors.background,
  footColor: darkColors.background,
  hover: "#473d5d",
};
