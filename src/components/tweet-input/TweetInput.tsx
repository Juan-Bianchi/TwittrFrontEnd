import React, { ChangeEventHandler } from "react";
import Avatar from "../common/avatar/Avatar";
import Icon from "../../assets/icon.jpg";
import { StyledTweetInputContainer } from "./TweetInputContainer";
import { StyledBorderlessTextArea } from "./BorderlessTextArea";

interface TweetInputProps {
  placeholder: string;
  name: string
  src?: string;
  alt?: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  value?: string;
}
const TweetInput = ({
  placeholder,
  src,
  alt,
  onChange,
  name,
  value
}: TweetInputProps) => {
  return (
    <StyledTweetInputContainer>
      <Avatar src={src ?? Icon} alt={alt ?? "Icon"} />
      <StyledBorderlessTextArea
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        value={value}
      />
    </StyledTweetInputContainer>
  );
};
export default TweetInput;
