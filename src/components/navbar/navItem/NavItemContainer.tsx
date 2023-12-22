import styled from "styled-components";

export const StyledNavItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  align-self: stretch;
  border-radius: 40px;
  padding: 16px;
  transition: ease-in-out 0.3s;
  &:hover {
    background-color: ${(props) => props.theme.colors.hover};
    cursor: pointer;
  }
  p {
    color: ${(props) => props.theme.colors.black};
    font-size: 20px;
    font-family: "Manrope";
    line-height: 110%;
    letter-spacing: -0.2px;
    text-transform: capitalize;
    margin: 0;
  }

  .active {
    font-weight: 800;
    line-height: 110%;
  }

  @media (max-width: 1024px) {
    p {
      display: none;
    }

    .Button {
      display: none;
    }
  }
`;
