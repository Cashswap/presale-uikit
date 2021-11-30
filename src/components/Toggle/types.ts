import { InputHTMLAttributes } from "react";

export type ToggleTheme = {
  handleBackground: string;
  handleCheckedBackground: string;
};

export type ToggleProps = InputHTMLAttributes<HTMLInputElement>;
