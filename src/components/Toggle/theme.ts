import { darkColors, lightColors } from "../../theme/colors";
import { ToggleTheme } from "./types";

export const light: ToggleTheme = {
  handleBackground: lightColors.background,
  handleCheckedBackground: lightColors.card,
};

export const dark: ToggleTheme = {
  handleBackground: darkColors.background,
  handleCheckedBackground: lightColors.card,
};
