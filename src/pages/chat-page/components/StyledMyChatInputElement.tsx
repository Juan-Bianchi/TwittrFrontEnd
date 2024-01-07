import styled from "styled-components";
import { MyInputVariant } from "../../../components/my-input/StyledMyInputContainer";

interface MyChatInputProps {
  inputVariant: MyInputVariant;
}

export const StyledMyChatInputElement = styled.input<MyChatInputProps>`
  font-size: 16px;
  border: none;
  outline: none;
  background: transparent !important;
  margin-left: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90%;
  border-start-start-radius: 0.5rem/* 8px */;
  border-end-start-radius: 0.5rem/* 8px */;
`;