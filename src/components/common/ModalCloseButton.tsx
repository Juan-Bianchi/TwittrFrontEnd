import React from "react";
import { StyledSpanContainer } from "../tweet-modal/SpanContainer";
import Close from "../../assets/close.svg";

export const ModalCloseButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <StyledSpanContainer>
      <span onClick={onClick}>
        <img src={Close} alt={"X"} />
      </span>
    </StyledSpanContainer>
  );
};
