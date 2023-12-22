import styled from "styled-components";
import "@fontsource/manrope";

interface ButtonProps {
  size: string;
  buttonType: ButtonType;
}
export enum ButtonType {
  DEFAULT = "DEFAULT",
  FOLLOW = "FOLLOW",
  DELETE = "DELETE",
  OUTLINED = "OUTLINED",
  DISABLED = "DISABLED",
}
export const StyledButton = styled.button<ButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 16px;
    gap: 8px;
    margin-bottom: 8px;
    width: ${(props) => props.size};
    height: 33px;
    left: 16px;
    top: 16px;

    background: ${(props) => {
      switch (props.buttonType) {
        case "DEFAULT":
          return props.theme.colors.main;
        case "FOLLOW":
          return props.theme.colors.black;
        case "DELETE":
          return props.theme.colors.error;
        case "OUTLINED":
          return props.theme.colors.white;
        case "DISABLED":
          return props.theme.colors.light;
        default:
          return props.theme.colors.main;
      }
    }};
    border-radius: 40px;

    /* Button */
    font-family: ${(props) => props.theme.font.default};
    font-style: normal;
    font-weight: 800;
    font-size: 15px;
    line-height: 110%;

    border: ${(props) =>
      props.buttonType === "OUTLINED"
        ? `1px solid ${props.theme.colors.outline}`
        : "none"};

    color: ${(props) =>
      props.buttonType === "OUTLINED"
        ? props.theme.colors.black
        : props.theme.colors.white};

    text-align: center;

    cursor: pointer;

    transition: 0.3s;

    &:active {
        transform: scale(0.95);
    }

    &:hover {
        background: ${(props) => {
          switch (props.buttonType) {
            case ButtonType.DEFAULT:
              return props.theme.hover.default;
            case ButtonType.FOLLOW:
              return props.theme.hover.follow;
            case ButtonType.DELETE:
              return props.theme.hover.error;
            case ButtonType.OUTLINED:
              return props.theme.hover.outlined;
            case ButtonType.DISABLED:
              return props.theme.hover.disabled;
          }
        }}
`;
export default StyledButton;
