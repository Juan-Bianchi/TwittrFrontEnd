import React, { ReactNode } from "react";
import { StyledBlurredBackground } from "../common/BlurredBackground";
import Button from "../button/Button";
import { ButtonType } from "../button/StyledButton";
import { StyledModalContainer } from "./ModalContainer";
import { StyledContainer } from "../common/Container";
import { StyledH5, StyledP } from "../common/text";

interface ModalProps {
  show: boolean;
  title: string;
  text?: string;
  img?: string;
  onClose: () => void;
  acceptButton: ReactNode;
}

const Modal = ({
  show,
  text,
  acceptButton,
  onClose,
  img,
  title,
}: ModalProps) => {
  return (
    <>
      {show && (
        <StyledBlurredBackground>
          <StyledModalContainer>
            <StyledContainer alignItems={"center"} justifyContent={"center"}>
              {img && (
                <img src={img} alt={"modal"} width={"32px"} height={"26px"} />
              )}
              <StyledContainer
                alignItems={"center"}
                justifyContent={"center"}
                padding={img ? "24px 0 0 0" : "0"}
                gap={"24px"}
              >
                <StyledContainer gap={img ? "8px" : "24px"}>
                  <StyledH5>{title}</StyledH5>
                  <StyledP primary={false}>{text}</StyledP>
                </StyledContainer>
                <StyledContainer alignItems={"center"}>
                  {acceptButton}
                  <Button
                    buttonType={ButtonType.OUTLINED}
                    text={"Cancel"}
                    size={"MEDIUM"}
                    onClick={onClose}
                  />
                </StyledContainer>
              </StyledContainer>
            </StyledContainer>
          </StyledModalContainer>
        </StyledBlurredBackground>
      )}
    </>
  );
};

export default Modal;
