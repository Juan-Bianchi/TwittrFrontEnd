import styled from "styled-components";

export const StyledLine = styled.div`
  max-width: 2px;
  background-color: ${(props) => props.theme.colors.containerLine};
  width: 100%;
  min-height: 68px;
  height: 100%;
  margin-left: 24px;
  margin-right: 32px;
`;
