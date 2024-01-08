import styled, { css } from "styled-components";
import { CSSProperties } from "react";

type ContainerProps = {
  hoverable?: boolean;
} & CSSProperties;

const ContainerBase = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  box-sizing: border-box;
  transition: 0.3s ease-in-out;
  position: relative;
  scrollbar-width: auto;
  border-radius: 0;
  min-height: aut
  ;
  min-width: 0;
  width: 100%;
`;

export const StyledContainer = styled(ContainerBase).attrs<ContainerProps>(
  (props) => ({
    style: props,
  })
)<ContainerProps>`
  &:hover {
    ${(props) =>
      props.hoverable &&
      css`
        background-color: ${props.theme.colors.hover};
        cursor: pointer;
      `}
  }
`;

export const StyledHoverableCointainer = styled(StyledContainer)`
  cursor: pointer;
  justify-content: center;
  align-items: start;
`

export const StyledScrollableContainer = styled(StyledContainer)`
  scrollbar-width: none;
`;

export const StyledOverflowContainer = styled(StyledContainer)``;
