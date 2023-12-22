import React from "react";
import { StyledAuthorDataContainer } from "./AuthorDataContainer";
import Avatar from "../../common/avatar/Avatar";
import Icon from "../../../assets/icon.jpg";
import { StyledDot } from "../../common/Dot";
import { useNavigate } from "react-router-dom";

interface UserPostDataProps {
  createdAt: Date;
  id: string;
  name: string;
  username: string;
  profilePicture?: string;
}
const AuthorData = ({
  createdAt,
  id,
  username,
  name,
  profilePicture,
}: UserPostDataProps) => {
  const navigate = useNavigate();

  const redirectToProfile = () => {
    navigate(`/profile/${id}`);
  };

  return (
    <StyledAuthorDataContainer>
      <Avatar
        src={profilePicture === null ? Icon : profilePicture!}
        alt={name}
        onClick={redirectToProfile}
      />
      <p>{name}</p>
      <p className={"username"}>{"@" + username}</p>
      <StyledDot />
      <p className={"username"}>
        {new Date(createdAt).toLocaleString("default", {
          month: "short",
          day: "numeric",
        })}
      </p>
    </StyledAuthorDataContainer>
  );
};

export default AuthorData;
