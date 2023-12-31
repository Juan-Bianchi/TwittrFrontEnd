import React, { ChangeEvent, useRef, useState } from "react";
import { StyledInputContainer } from "./InputContainer";
import { StyledInputTitle } from "./InputTitle";
import { StyledInputElement } from "./StyledInputElement";

interface InputWithLabelProps {
  type?: "password" | "text";
  name: string;
  title: string;
  placeholder: string;
  autocomplete?: string;
  error?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

const LabeledInput = ({
  title,
  placeholder,
  error,
  autocomplete,
  onChange,
  onBlur,
  onFocus,
  type = "text",
  name,
}: InputWithLabelProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [focus, setFocus] = useState(false);

  const handleFocus = (e:  React.FocusEvent<HTMLInputElement>) => {
    onFocus && onFocus(e)
    setFocus(true);
  };

  const handleBlur = (e:  React.FocusEvent<HTMLInputElement>) => {
    onBlur && onBlur(e)
    setFocus(false);
  };

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <StyledInputContainer
      className={`${error ? "error" : ""}`}
      onClick={handleClick}
      onSubmit={e => e.preventDefault()}
    >
      <StyledInputTitle
        className={`${focus ? "active-label" : ""} ${error ? "error" : ""}`}
      >
        {title}
      </StyledInputTitle>
      <StyledInputElement
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autocomplete}
        onFocus={(e) => handleFocus(e)}
        onBlur={(e)=> handleBlur(e)}
        onChange={onChange}
        className={error ? "error" : ""}
        ref={inputRef}
      />
    </StyledInputContainer>
  );
};

export default LabeledInput;
