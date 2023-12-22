import styled from "styled-components";

export const StyledFeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  scrollbar-width: none;

  @media (max-width: 600px) {
    margin-bottom: 48px;
  }
`;
