import React from "react";
import styled, { keyframes } from "styled-components";

const spinAnimation = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const StyledLoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px; /* Adjust the height as needed */
`;

const StyledLoaderSpinner = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 4px solid #ccc;
  border-top-color: ${({ theme }) => theme.colors.main};
  animation: ${spinAnimation} 0.8s linear infinite;
`;

const Loader = () => {
  return (
    <StyledLoaderContainer>
      <StyledLoaderSpinner />
    </StyledLoaderContainer>
  );
};

export default Loader;
