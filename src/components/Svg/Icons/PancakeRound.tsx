import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 100 100" {...props}>
      <image width="100" height="100" href={"/images/cash/cash.png"} />
    </Svg>
  );
};

export default Icon;
