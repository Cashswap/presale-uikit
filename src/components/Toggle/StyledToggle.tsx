import styled from "styled-components";

export const Handle = styled.div`
  background-color: ${({ theme }) => theme.toggle.handleBackground};
  border-radius: 50%;
  cursor: pointer;
  height: 24px;
  left: 4px;
  position: absolute;
  top: 4px;
  transition: left 200ms ease-in;
  width: 24px;
  z-index: 1;
`;

export const Input = styled.input`
  cursor: pointer;
  opacity: 0;
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: 3;

  &:checked + ${Handle} {
    left: calc(100% - 30px);
  }
`;

const StyledToggle = styled.div<{ checked: boolean }>`
  align-items: center;
  background-color: ${({ theme, checked }) => theme.colors[checked ? "success" : "contrast"]};
  border-radius: 24px;
  cursor: pointer;
  display: inline-flex;
  height: 32px;
  position: relative;
  transition: background-color 200ms;
  width: 52px;
`;

export default StyledToggle;
