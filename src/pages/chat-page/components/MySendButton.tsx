import React, { MouseEventHandler } from "react";

import { MyButtonVariant } from "../../../components/my-button/StyledMyButton";
import { StyledMySendButton } from "./StyledMySendButton";


interface MySendButtonProps {
  buttonVariant: MyButtonVariant;
  onClick?: MouseEventHandler;
  disabled?: boolean;
}
const MySendButton = ({ buttonVariant, onClick, disabled }: MySendButtonProps) => {
  return (
    <StyledMySendButton
      buttonVariant={disabled ? MyButtonVariant.GHOST : buttonVariant}
      disabled={buttonVariant === "GHOST" || (disabled ? disabled : false)}
      onClick={onClick}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <g id="send">
        <path id="Vector" fillRule="evenodd" d="M4.01 6.03L11.52 9.25L4 8.25L4.01 6.03V6.03ZM11.51 14.75L4 17.97V15.75L11.51 14.75V14.75ZM2.01 3L2 10L17 12L2 14L2.01 21L23 12L2.01 3Z" clipRule="evenodd"/>
        </g>
      </svg>
    </StyledMySendButton>
  );
};

export default MySendButton;
