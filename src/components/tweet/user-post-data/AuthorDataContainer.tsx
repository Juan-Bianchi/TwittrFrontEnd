import styled from "styled-components";

export const StyledAuthorDataContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  height: 100%;
  min-height: 48px;

  p {
    color: ${(props) => props.theme.colors.black};
    font-size: 15px;
    font-family: "Manrope", sans-serif;
    font-weight: 600;
    line-height: 110%;
    letter-spacing: -0.15px;
    margin: 0;
  }

  .username {
    color: ${(props) => props.theme.colors.text};

    /* Body-1 */
    font-size: 15px;
    font-family: Manrope, sans-serif;
    line-height: 110%;
    letter-spacing: -0.15px;
  }
`;
