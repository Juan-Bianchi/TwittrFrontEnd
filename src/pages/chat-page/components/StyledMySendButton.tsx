import styled from "styled-components";
import "@fontsource/manrope";
import { MyButtonVariant } from "../../../components/my-button/StyledMyButton";

interface MySendButtonProps {
  buttonVariant: MyButtonVariant;
}

export const StyledMySendButton = styled.button<MySendButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  gap: 8px;
  height: auto;
  left: 16px;
  top: 16px;
  font-family: ${(props) => props.theme.font.default};
  font-style: normal;
  font-weight: 800;
  font-size: 15px;
  line-height: 110%;
  text-align: center;
  cursor: pointer;
  transition: 0.3s;
  border-top-right-radius: 0.5rem/* 8px */;
  border-bottom-right-radius: 0.5rem/* 8px */;

  background: ${(props) => {
    switch (props.buttonVariant) {
      case "FULFILLED":
        return props.theme.colors.myButtonMain;
      case "GHOST":
        return props.theme.colors.inactiveBackground;
      case "WHITE":
        return props.theme.colors.white;
      case "OUTLINED":
        return 'transparent';
      case 'BLACK':
        return props.theme.colors.black;
      case 'DANGER':
        return props.theme.colors.error;
      default:
        return props.theme.colors.myButtonMain;
    }
  }}
  };
  
  border: ${(props) =>
    props.buttonVariant === "OUTLINED" || props.buttonVariant === "WHITE"
      ? `1px solid ${props.theme.colors.myButtonOutline}`
      : "none"};

  color: ${(props) =>
    props.buttonVariant === "OUTLINED" || props.buttonVariant === "WHITE"
      ? props.theme.colors.myButtonOutline
      : props.theme.colors.white};

  
  &:active {
      transform: scale(0.95);
  }

  &:hover {
      background: ${(props) => {
        switch (props.buttonVariant) {
          case MyButtonVariant.FULFILLED:
            return props.theme.hover.white;
          case MyButtonVariant.GHOST:
            return props.theme.hover.disabled;
          case MyButtonVariant.WHITE:
          case MyButtonVariant.BLACK:
            return props.theme.hover.myButtonMain;
          case MyButtonVariant.OUTLINED:
            return props.theme.hover.myButtonMain;
          case MyButtonVariant.DANGER:
            return props.theme.hover.error;
        }
      }};

      color: ${(props) => {
        switch(props.buttonVariant) {
          case MyButtonVariant.FULFILLED:
            return props.theme.hover.myButtonOutline;
          case MyButtonVariant.OUTLINED:
          case MyButtonVariant.WHITE:
          case MyButtonVariant.GHOST:
            return props.theme.hover.white;
        }
      }};
      
      border: ${(props) => {
        switch(props.buttonVariant) {
          case MyButtonVariant.FULFILLED:
            return `1px solid ${props.theme.colors.myButtonOutline}`;
          case MyButtonVariant.OUTLINED:
          case MyButtonVariant.WHITE:
            return 'none';
          case MyButtonVariant.GHOST:
            return props.theme.hover.disabled;
        }
      }};

      box-shadow: ${(props) => {
        switch(props.buttonVariant) {
          case MyButtonVariant.FULFILLED:
          case MyButtonVariant.OUTLINED:
          case MyButtonVariant.WHITE:
          case MyButtonVariant.BLACK:
          case MyButtonVariant.DANGER:
            return '0 1.2px 1.2px rgba(0, 0, 0, 0.8);'
        }
      }}
      
  }
`;


