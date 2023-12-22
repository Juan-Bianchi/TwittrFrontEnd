import styled from "styled-components";

export const StyledModalInputContainer = styled.div`
  display: flex;
  width: 100%;
  max-height: 150px;
  height: 100%;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex-shrink: 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.containerLine};
`;
