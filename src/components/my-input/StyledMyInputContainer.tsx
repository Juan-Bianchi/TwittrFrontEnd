import styled from "styled-components";

interface MyInputContainerProps {
  containerVariant: MyInputVariant;
  containerSize: MyInputSize;
}

export enum MyInputVariant {
  OUTLINED = 'OUTLINED',
  FULFILLED = 'FULFILLED',
  GHOST = 'GHOST',
  WHITE = 'WHITE',
  BLACK = 'BLACK',
  DANGER = 'DANGER'
}

export enum MyInputSize {
  SMALL = 'SMALL',
  MEDIUM = 'MEDIUM',
  LARGE = 'LARGE'
}

export const StyledMyInputContainer = styled.form<MyInputContainerProps>`
  border-radius: 10px;
  padding: 8px;
  border: ${(props) =>{
    switch(props.containerVariant){
      case 'FULFILLED':
        return `1px solid ${props.theme.colors.main}`;
      case 'OUTLINED':
      case 'WHITE':
      case 'GHOST': 
        return `1px solid ${props.theme.colors.light}`;
      case 'BLACK': 
        return `1px solid ${props.theme.colors.black}`;
      default:
        return `1px solid ${props.theme.colors.outline}`;
    }
  }};
  transition: 0.3s;

  width: ${(props) => {
    switch (props.containerSize) {
      case "SMALL": 
        return props.theme.inputSize.small;
      case "MEDIUM": 
        return props.theme.inputSize.medium;
      case "LARGE": 
        return props.theme.inputSize.large;
    }
  }}
  };

  background: ${(props) =>{
    switch (props.containerVariant) {
      case 'FULFILLED':
        return props.theme.colors.lightTransparent;
      case 'WHITE':
        return props.theme.colors.white
      case 'OUTLINED':
      case 'GHOST': 
        return props.theme.colors.lightTransparent;
      case 'BLACK': 
        return props.theme.colors.inactiveBackground;
      default:
        return props.theme.colors.main;
    }
  }};

  &.active-div {
    border: 1px solid ${(props) => props.theme.colors.myButtonMain};
  }

  &.error {
    border: 1px solid ${(props) => props.theme.colors.error2};
  }

  @media (min-width: 600px) {
    width: ${(props)=> props.theme.inputSize.large};

    &.active-div {
      scale: 1.05
    }
  }
`;
