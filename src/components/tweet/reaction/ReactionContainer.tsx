import styled from "styled-components";

export const StyledReactionContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  gap: 8px;
  height: 100%;
  max-width: 60px;
  max-height: 17px;

  img {
    width: 16px;
    height: 16px;
    cursor: pointer;
  }

  p {
    color: ${(props) => props.theme.colors.text};
    font-size: 15px;
    font-family: Manrope, sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 110%;
    letter-spacing: -0.15px;
    margin: 0;
  }
`;
