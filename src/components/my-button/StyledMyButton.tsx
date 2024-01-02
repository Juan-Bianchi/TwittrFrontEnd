import styled from "styled-components";
import "@fontsource/manrope";

interface MyButtonProps {
  buttonVariant: MyButtonVariant;
  buttonSize: MyButtonSize;
}

export enum MyButtonVariant {
  OUTLINED = 'OUTLINED',
  FULFILLED = 'FULFILLED',
  GHOST = 'GHOST',
  WHITE = 'WHITE',
  BLACK = 'BLACK',
  DANGER = 'DANGER'
}

export enum MyButtonSize {
  SMALL = 'SMALL',
  MEDIUM = 'MEDIUM',
  LARGE = 'LARGE'
}


export const StyledMyButton = styled.button<MyButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  gap: 8px;
  margin-bottom: 8px;
  height: 33px;
  left: 16px;
  top: 16px;
  font-family: ${(props) => props.theme.font.default};
  font-style: normal;
  font-weight: 800;
  font-size: 15px;
  line-height: 110%;
  border-radius: 40px;
  text-align: center;
  cursor: pointer;
  transition: 0.3s;

  width: ${(props) => {
    switch (props.buttonSize) {
      case "SMALL": 
        return props.theme.buttonSize.small;
      case "MEDIUM": 
        return props.theme.buttonSize.medium;
      case "LARGE": 
        return props.theme.buttonSize.large;
    }
  }}
  };

  background: ${(props) => {
    switch (props.buttonVariant) {
      case "FULFILLED":
        return props.theme.colors.myButtonMain;
      case "GHOST":
        return props.theme.colors.light;
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


