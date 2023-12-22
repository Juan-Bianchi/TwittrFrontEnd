// SwitchButton.tsx
import React from "react";
import styled from "styled-components";

const StyledSwitchContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 30px;
`;

const StyledInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

const StyledLabel = styled.label<{ checked: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ checked }) => (checked ? "#2196F3" : "#ccc")};
  border-radius: 15px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:before {
    content: "";
    position: absolute;
    top: 3px;
    left: ${({ checked }) => (checked ? "30px" : "3px")};
    width: 24px;
    height: 24px;
    background-color: white;
    border-radius: 50%;
    transition: transform 0.3s ease;
  }
`;

interface SwitchButtonProps {
  checked: boolean;
  onChange: () => void;
}

const SwitchButton = ({ checked, onChange }: SwitchButtonProps) => {
  return (
    <StyledSwitchContainer onClick={onChange}>
      <StyledInput type="checkbox" checked={checked} />
      <StyledLabel checked={checked} />
    </StyledSwitchContainer>
  );
};

export default SwitchButton;
