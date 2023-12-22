import styled from "styled-components";

export const StyledSearchResultModalContainer = styled.div`
  display: flex;
  max-width: inherit;
  width: 100%;
  padding: 8px;
  flex-direction: column;
  align-items: flex-start;
  box-sizing: border-box;
  gap: 16px;
  border-radius: 16px;
  background: ${(props) => props.theme.background};
  box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.25);
  position: absolute;
  top: 2px;
  transition: 0.3s ease-in-out;
  background: ${(props) => props.theme.background};
`;

// interface SearchResultModalContainerProps {
//     short?: boolean;
// }
