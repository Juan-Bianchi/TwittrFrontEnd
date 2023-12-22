import styled from "styled-components";

interface SearchBarInputProps {
  short?: boolean;
}

export const StyledSearchBarContainer = styled.div`
  display: flex;
  max-width: ${(props: SearchBarInputProps) =>
    props.short ? "400px" : "100%"};
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  transition: 0.3s ease-in-out;
  box-sizing: border-box;
`;
