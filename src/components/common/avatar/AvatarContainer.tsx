import styled from "styled-components";

interface AvatarContainerProps {
  width?: string;
  height?: string;
}
export const StyledAvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: ${(props: AvatarContainerProps) => props.width || "48px"};
  height: ${(props: AvatarContainerProps) => props.height || "48px"};
  border-radius: 50%;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;
