import styled from "styled-components";

export const StyledIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding-left: 16px;

  @media (max-width: 1265px) {
    padding-left: 0;
    justify-content: center;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;
