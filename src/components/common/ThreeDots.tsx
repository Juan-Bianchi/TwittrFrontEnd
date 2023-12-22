import React from "react";
import { StyledContainer } from "./Container";
import { StyledDot } from "./Dot";

const ThreeDots = ({ onClick }: { onClick: () => void }) => {
  return (
    <StyledContainer
      flexDirection={"row"}
      gap={"2px"}
      alignItems={"center"}
      justifyContent={"center"}
      maxWidth={"20px"}
      maxHeight={"20px"}
      padding={"2px"}
      borderRadius={"50%"}
      hoverable
      onClick={onClick}
    >
      <StyledDot />
      <StyledDot />
      <StyledDot />
    </StyledContainer>
  );
};

export default ThreeDots;
