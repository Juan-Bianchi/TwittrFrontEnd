import styled from "styled-components";

export const StyledTabContainer = styled.div`
  display: flex;
  max-width: 301px;
  width: 100% !important;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  height: 57px;
  flex: 1 0 0;
  transition: 0.3s;

  p {
    padding-top: 16px;
    margin-right: auto;
    margin-left: auto;
    margin-top: 0;
    color: ${(props) => props.theme.colors.black};
    /* Body-1 */
    font-size: 15px;
    font-family: Manrope;
    line-height: 110%;
    letter-spacing: -0.15px;
  }

  .active {
    font-weight: 800;
  }

  @media (max-width: 1024px) {
    p {
      text-align: center;
      padding: 16px 10px 0 10px;
    }
  }
`;
