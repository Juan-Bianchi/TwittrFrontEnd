import styled from "styled-components";

export const StyledPromptContainer = styled.div`
  display: flex;
  min-width: 264px;
  padding: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  gap: 24px;
  flex-shrink: 0;
  background: ${(props) => props.theme.background};
  border-radius: 16px;
  border: 1px solid ${(props) => props.theme.colors.light};
  position: absolute;
  top: -300%;

  transition: 0.3s ease-in-out;
  z-index: 100;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 1265px) {
    left: -80%;
    p {
      display: flex !important;
    }
  }
`;
