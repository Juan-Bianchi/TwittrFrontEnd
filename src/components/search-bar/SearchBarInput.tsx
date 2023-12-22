import styled from "styled-components";

export const StyledSearchBarInput = styled.input`
  display: flex;
  padding: 16px 16px 16px 16px;
  align-items: flex-start;
  width: 100%;
  gap: 8px;
  box-sizing: border-box;
  border-radius: 30px;
  background: ${(props) => props.theme.colors.inactiveBackground};
  color: ${(props) => props.theme.colors.text};
  border: none;

  transition: 0.07s;
  /* Body-1 */
  font-size: 15px;
  font-family: ${(props) => props.theme.font.default};
  line-height: 110%;
  letter-spacing: -0.15px;

  &:focus {
    border-radius: 30px;
    outline: 1px solid ${(props) => props.theme.colors.main};
    background: ${(props) => props.theme.background};
  }
`;
