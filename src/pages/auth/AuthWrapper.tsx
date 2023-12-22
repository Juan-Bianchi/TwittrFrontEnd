import styled from "styled-components";
import "@fontsource/inter";

const StyledSignInWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .input-container {
    display: flex;
    flex-direction: column;
    gap: 8px;
    justify-content: left;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
  }

  img {
    width: 44px;
    height: 36px;
    margin-bottom: 16px;
  }

  .error-message {
    color: #e03c39;
    font-family: Manrope, sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 13px;
    letter-spacing: -0.01em;
  }

  /* Media query for screens larger than the phone size */
  @media (min-width: 600px) {
    .container {
      width: 415px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-bottom: 16px;
    }
    .border {
      height: 80vh; /* Set height to full viewport height */
      width: 600px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      border: 1px solid #f0f3f4;
    }
  }
`;

export default StyledSignInWrapper;
