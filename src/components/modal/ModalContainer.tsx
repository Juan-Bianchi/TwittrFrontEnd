import styled from "styled-components";

export const StyledModalContainer = styled.div`
  display: block;
  padding: 40px 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  background: ${(props) => props.theme.background};
  border-radius: 16px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  max-width: 286px;
  width: auto;
  height: 279px;
  box-sizing: border-box;
  z-index: 3;
  p {
    margin: 0;
  }

  @media (max-width: 1265px) {
    left: 7%;
    p {
      display: flex;
    }

    img {
      display: flex;
    }

    button {
      display: flex;
    }

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
