import styled from "styled-components";

export const StyledSpanContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px;
  width: 100%;
  max-height: 40px;
  height: 100%;
  box-sizing: border-box;

  span {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  &:hover {
    cursor: pointer;
  }
`;
