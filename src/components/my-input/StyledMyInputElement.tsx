import styled from "styled-components";
import { MyInputVariant } from "./StyledMyInputContainer";

interface MyInputProps {
  inputVariant: MyInputVariant;
}

export const StyledMyInputElement = styled.input<MyInputProps>`
  font-size: 16px;
  border: none;
  outline: none;
  background: transparent !important;
  margin-left: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90%
`;