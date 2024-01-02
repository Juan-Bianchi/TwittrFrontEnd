import React, { ChangeEvent, useRef, useState } from "react";

import { MyInputSize, MyInputVariant, StyledMyInputContainer } from "./StyledMyInputContainer";
import { StyledMyInputTitle } from "./StyledMyInputTitle";
import { StyledMyInputElement } from "./StyledMyInputElement";

interface MyInputProps {
  type?: "password" | "text";
  name: string;
  title: string;
  placeholder: string;
  variant: MyInputVariant;
  size: MyInputSize;
  autocomplete?: string;
  error?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

const MyInput = ({
  title,
  placeholder,
  error,
  autocomplete,
  onChange,
  onBlur,
  onFocus,
  type = "text",
  name,
  variant,
  size,
}: MyInputProps) => {
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
    <StyledMyInputContainer
      className={`${error ? "error" : focus? 'active-div': ''}`}
      onClick={handleClick}
      onSubmit={e => e.preventDefault()}
      containerVariant={variant}
      containerSize={size}
    >
      <StyledMyInputTitle
        className={`${focus ? "active-label" : ""} ${error ? "error" : ""}`}
      >
        {title}
      </StyledMyInputTitle>
      <StyledMyInputElement
        inputVariant={variant}
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
    </StyledMyInputContainer>
  );
};

export default MyInput;
