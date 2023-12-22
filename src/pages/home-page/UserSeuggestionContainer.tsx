import styled from "styled-components";

export const StyledUserSuggestionContainer = styled.div`
  flex: 1;
  width: 100%;
  padding-left: 16px;
  padding-top: 16px;
  gap: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  @media (max-width: 1024px) {
    display: none;
  }
`;
