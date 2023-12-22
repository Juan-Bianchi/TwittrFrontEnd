import styled from "styled-components";
import "@fontsource/manrope";

export const StyledInputTitle = styled.label`
  font-family: "Manrope", sans-serif;
  font-size: 15px;
  height: 17px;
  font-weight: 400;
  color: #566370;
  margin-left: 8px;
  margin-bottom: 4px;
  display: flex;
  align-items: center;

  &.active-label {
    color: #4a99e9;
  }

  &.error {
    color: #e03c39;
  }
`;
