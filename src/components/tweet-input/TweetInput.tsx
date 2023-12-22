import React, { ChangeEventHandler } from "react";
import Avatar from "../common/avatar/Avatar";
import Icon from "../../assets/icon.jpg";
import { StyledTweetInputContainer } from "./TweetInputContainer";
import { StyledBorderlessTextArea } from "./BorderlessTextArea";

interface TweetInputProps {
  placeholder: string;
  src?: string;
  alt?: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  maxLength: number;
  value?: string;
}
const TweetInput = ({
  placeholder,
  src,
  alt,
  onChange,
  maxLength,
  value,
}: TweetInputProps) => {
  return (
    <StyledTweetInputContainer>
      <Avatar src={src ?? Icon} alt={alt ?? "Icon"} />
      <StyledBorderlessTextArea
        onChange={onChange}
        maxLength={maxLength}
        placeholder={placeholder}
        value={value ?? ""}
      />
    </StyledTweetInputContainer>
  );
};
export default TweetInput;
