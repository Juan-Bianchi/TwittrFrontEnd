import React, { useEffect, useState } from "react";
import { StyledAuthorDataContainer } from "./AuthorDataContainer";
import Avatar from "../../common/avatar/Avatar";
import Icon from "../../../assets/icon.jpg";
import { StyledDot } from "../../common/Dot";
import { useNavigate } from "react-router-dom";
import { useHttpRequestService } from "../../../service/HttpRequestService";

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
  const service = useHttpRequestService();
  const [url, setUrl] = useState<string | undefined>(undefined)

  const redirectToProfile = () => {
    navigate(`/profile/${id}`);
  };

  const updateProfileURL = async () => {
    if(profilePicture && !profilePicture.startsWith('ht')) {
      try {
        const avatarUrl: string = await service.getAvatarUrl(profilePicture)
        setUrl(avatarUrl)
      }
      catch(e) {
        setUrl(profilePicture)
      }
    }
    else {
      setUrl(profilePicture)
    }
  }

  useEffect(()=> {
    updateProfileURL();
  })

  return (
    <StyledAuthorDataContainer>
      <Avatar
        src={url? url : Icon}
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
