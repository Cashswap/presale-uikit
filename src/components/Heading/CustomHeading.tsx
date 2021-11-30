import styled from "styled-components";
import Text from "../Text/Text";
import { tags, sizes, HeadingProps } from "./types";

const style = {
  [sizes.MD]: {
    fontSize: "20px",
  },
  [sizes.LG]: {
    fontSize: "24px",
  },
  [sizes.XL]: {
    fontSize: "40px",
  },
  [sizes.XXL]: {
    fontSize: "64px",
  },
};

const CustomHeading = styled(Text).attrs({ bold: true })<HeadingProps>`
  ${({ size }) => style[size || sizes.MD]}
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  background: linear-gradient(91.26deg, rgba(169, 205, 255, 1), rgba(255, 0, 0, 0) 11.87%),
    linear-gradient(91.26deg, rgba(114, 246, 209, 1), rgba(114, 246, 209, 0) 21.87%),
    linear-gradient(91.26deg, rgba(160, 237, 141, 1), rgba(160, 237, 141, 0) 55.73%),
    linear-gradient(91.26deg, rgba(254, 211, 101, 1), rgba(254, 211, 101, 0) 81.77%),
    linear-gradient(91.26deg, rgba(250, 164, 158, 1), rgba(250, 164, 158, 1) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

CustomHeading.defaultProps = {
  as: tags.H2,
};

export default CustomHeading;
