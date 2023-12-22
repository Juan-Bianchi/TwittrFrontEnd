import styled from "styled-components";

export const StyledDeletePostModalContainer = styled.div`
  display: flex;
  padding: 8px;
  flex-direction: row;
  justify-content: flex-start;
  gap: 8px;
  box-sizing: border-box;
  border-radius: 16px;
  background: ${(props) => props.theme.background};
  box-shadow: 0 0 19px -3px rgba(0, 0, 0, 0.25);
  align-items: center;
  position: relative;
  transform: translateX(-10%);

  &:hover {
    cursor: pointer;
  }

  p {
    color: ${(props) => props.theme.colors.error};

    /* Button */
    font-family: ${(props) => props.theme.font.default};
    font-size: 15px;
    font-style: normal;
    font-weight: 800;
    line-height: 110%; /* 16.5px */
    letter-spacing: -0.15px;
    margin: 0;
  }
`;
