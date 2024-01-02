import styled from "styled-components";
import "@fontsource/manrope";

export const StyledMyInputTitle = styled.label`
  font-family: "Manrope", sans-serif;
  font-size: 15px;
  height: 17px;
  font-weight: 400;
  color: ${(props) => props.theme.colors.main};
  margin-left: 8px;
  margin-bottom: 4px;
  display: flex;
  align-items: center;

  &.active-label {
    color: blue;
  }

  &.error {
    color: ${(props) => props.theme.colors.error2};
  }
`;
