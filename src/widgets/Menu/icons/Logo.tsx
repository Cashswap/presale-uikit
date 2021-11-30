import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg viewBox="0 0 60 22" {...props}>
      <image width="60" height="22" href={isDark ? "/images/cash/cswaplogo.png" : "/images/cash/cswaplogo.png"} />
    </Svg>
  );
};

export default Logo;
