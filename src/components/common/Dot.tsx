import styled from "styled-components";

export const StyledDot = styled.div`
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.text};
`;
