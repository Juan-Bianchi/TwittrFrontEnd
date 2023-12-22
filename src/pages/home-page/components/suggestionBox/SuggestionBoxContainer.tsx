import styled from "styled-components";

export const StyledSuggestionBoxContainer = styled.div`
  display: flex;
  max-width: inherit;
  width: 100%;
  margin: 0;
  box-sizing: border-box;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  background: ${(props) => props.theme.colors.inactiveBackground};
  border-radius: 16px;

  h6 {
    color: ${(props) => props.theme.colors.black};
    /* H6 */
    font-size: 18px;
    font-family: "Inter";
    font-weight: 500;
    line-height: 110%;
    letter-spacing: 0.027px;
    margin: 0;
  }

  a {
    color: ${(props) => props.theme.colors.main};
    cursor: pointer;
  }
`;
