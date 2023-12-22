import styled from "styled-components";

export const StyledTweetModalContainer = styled.div`
  position: fixed;
  transform: translate(50vw, 50vh);
  top: -40vh;
  left: -20vw;
  display: flex;
  max-width: 560px;
  width: 100%;
  box-sizing: border-box;
  background: ${(props) => props.theme.background};
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
  border-radius: 16px;

  p {
    margin: 0;
  }

  @media (max-width: 1265px) {
    button {
      display: flex;
    }
  }
`;
