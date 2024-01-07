import styled from "styled-components";
import { MyInputVariant } from "../../../components/my-input/StyledMyInputContainer";

interface MyChatInputContainerProps {
  containerVariant: MyInputVariant;
}


export const StyledMyChatInputContainer = styled.form<MyChatInputContainerProps>`
  display: flex;
  justify-items: stretch;
  align-content: center;
  border-radius: 10px;
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
  width: 100%;

  background: ${(props) =>{
    switch (props.containerVariant) {
      case 'FULFILLED':
        return props.theme.colors.lightTransparent;
      case 'WHITE':
        return props.theme.colors.white
      case 'OUTLINED':
        return 'transparent'
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
`;
