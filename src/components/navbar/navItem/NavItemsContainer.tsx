import styled from "styled-components";

export const StyledNavItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-top: 16px;
  padding-bottom: 16px;
  width: 100%;
  max-width: 275px;

  @media (max-width: 600px) {
    padding-top: 0;
    max-width: 600px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;
