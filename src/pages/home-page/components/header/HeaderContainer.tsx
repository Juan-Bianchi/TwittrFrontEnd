import styled from "styled-components";

export const StyledHeaderContainer = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.colors.containerLine};
  width: 100%;
  transition: ease-in-out 0.3s;
  max-height: 110px;

  h5 {
    color: var(--grayscale-black, #000);
    /* H5 */
    font-size: 20px;
    font-family: "Inter", sans-serif;
    font-weight: 900;
    line-height: 110%;
    letter-spacing: -0.1px;
    padding: 16px;
    margin-top: 0;
    margin-bottom: 0;
  }

  .logo {
    display: none;
  }

  .icon {
    display: none;
  }

  .title-container {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  @media (max-width: 1024px) {
    max-width: 1024px;
  }

  @media (max-width: 600px) {
    max-width: 600px;

    .logo {
      display: flex;
      width: 24px;
      height: 19.692px;
      position: absolute;
      margin-top: -20px; /* Adjust the negative margin to align with the icon */
      left: 50%;
      top: 7.8%;
      transform: translate(-50%, -50%);
    }

    .icon {
      display: flex;
      width: 32px;
      height: 32px;
      flex-shrink: 0;
      border-radius: 32px;
      margin-top: 16px;
      margin-left: 16px;
    }

    h5 {
      display: none;
    }
  }
`;
