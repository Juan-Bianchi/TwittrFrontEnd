import React from "react";
import { StyledContainer } from "../../components/common/Container";
import Avatar from "../../components/common/avatar/Avatar";
import Icon from "../../assets/icon.jpg";
import { StyledH5, StyledP } from "../../components/common/text";

interface ProfileInfoContainerProps {
  name?: string;
  username: string;
  profilePicture?: string;
}
const ProfileInfo = ({
  name,
  username,
  profilePicture,
}: ProfileInfoContainerProps) => {
  return (
    <StyledContainer gap={"32px"} flex={2} flexDirection={"row"}>
      <Avatar
        src={profilePicture === null ? Icon : profilePicture!}
        width={"133px"}
        height={"133px"}
        alt={name ?? "Name"}
      />
      <StyledContainer justifyContent={"center"}>
        <StyledH5>{name ?? "Name"}</StyledH5>
        <StyledP primary={false}>{`@${username}`}</StyledP>
        <StyledP primary={false}>Description...</StyledP>
      </StyledContainer>
    </StyledContainer>
  );
};
export default ProfileInfo;
