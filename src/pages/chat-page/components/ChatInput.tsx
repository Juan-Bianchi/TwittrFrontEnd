import { ChangeEvent, useRef, useState } from "react";
import { StyledContainer } from "../../../components/common/Container"
import { StyledMyChatInputContainer } from "./StyledMyChatInputContainer"
import { MyInputVariant } from "../../../components/my-input/StyledMyInputContainer"
import { StyledMyChatInputElement } from "./StyledMyChatInputElement";
import MySendButton from "./MySendButton";
import { MyButtonVariant } from "../../../components/my-button/StyledMyButton";

interface ChatInputProps {
  type?: "text";
  name: string;
  placeholder: string;
  variant: MyInputVariant;
  autocomplete?: string;
  error?: boolean;
  value: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  handleSubmit: (e?: React.FormEvent<HTMLFormElement>) => void;
}

const ChatInput = ({
  handleSubmit,
  placeholder,
  error,
  autocomplete,
  onChange,
  onBlur,
  onFocus,
  type = "text",
  name,
  variant,
  value,
}: ChatInputProps) => {

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
    <StyledContainer height="10%" flexDirection="row" justifyContent="start" padding={'0px'}>
      <StyledMyChatInputContainer 
        containerVariant={MyInputVariant.OUTLINED}
        className={`${error ? "error" : focus? 'active-div': ''}`}
        onClick={handleClick}
        onSubmit={e => e.preventDefault()}
      >
        <StyledMyChatInputElement
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
          value={value}
        />
        <MySendButton
          onClick={e => {
            e.preventDefault();
            handleSubmit();
          }}
          buttonVariant={MyButtonVariant.OUTLINED}   
          disabled={!value.length}  
        />
      </StyledMyChatInputContainer>
    </StyledContainer>
  )
}

export default ChatInput