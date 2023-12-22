import styled from "styled-components";

export const StyledTweetButton = styled.button`
  display: none;
  padding: 16px 16px 19px;
  align-items: center;
  background: ${(props) => props.theme.colors.main};
  border-radius: 40px;
  font-size: 24px;
  color: ${(props) => props.theme.colors.white};
  border: none;
  max-width: 56px;
  max-height: 56px;
  width: 100%;
  height: 100%;
  justify-content: center;
  transition: 0.3s;
  cursor: pointer;

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 1265px) {
    display: flex;
  }

  @media (max-width: 600px) {
    position: absolute;
    top: -70px;
    right: 16px;
    z-index: 1;
  }
`;
