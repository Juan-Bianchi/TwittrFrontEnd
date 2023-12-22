import styled from "styled-components";

export const StyledBorderlessTextArea = styled.textarea`
  display: flex;
  max-width: 514px;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  flex: 1 0 0;
  align-self: stretch;
  color: ${(props) => props.theme.colors.black};
  border: none;
  outline: none;
  margin-top: 12px;
  background: none;
  /* H6 */
  font-size: 18px;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  line-height: 110%;
  letter-spacing: 0.027px;
  overflow-wrap: break-word; /* Added overflow-wrap property */
  resize: none;
  /* Adjust the height based on the number of rows */
  height: 100px;
`;

export default StyledBorderlessTextArea;
