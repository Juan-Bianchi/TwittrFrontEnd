import React, { useEffect, useState } from "react";
import ProfileInfo from "./ProfileInfo";
import { useNavigate, useParams } from "react-router-dom";
import Modal from "../../components/modal/Modal";
import { useTranslation } from "react-i18next";
import { Follow, User } from "../../service";
import { ButtonType } from "../../components/button/StyledButton";
import { useAppSelector } from "../../redux/hooks";
import { useHttpRequestService } from "../../service/HttpRequestService";
import Button from "../../components/button/Button";
import ProfileFeed from "../../components/feed/ProfileFeed";
import { StyledContainer } from "../../components/common/Container";
import { StyledH5 } from "../../components/common/text";
import { createPortal } from "react-dom";
import MyButton from "../../components/my-button/MyButton";
import { MyButtonSize, MyButtonVariant } from "../../components/my-button/StyledMyButton";
import { useDispatch } from "react-redux";
import { updateHasMorePosts, updatePointer } from "../../redux/user";
import cookie from "../../service/Cookie";

const ProfilePage = () => {
  const [profile, setProfile] = useState<User | null>(null);
  const [following, setFollowing] = useState<boolean>(false);
  const [follower, setFollower] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalValues, setModalValues] = useState({
    text: "",
    title: "",
    type: ButtonType.DEFAULT,
    buttonText: "",
  });

  const user = useAppSelector((state) => state.user.user);
  const dispatch = useDispatch()

  const id = useParams().id;
  const service = useHttpRequestService();
  const navigate = useNavigate();

  const { t } = useTranslation();

  const handleButtonType = (): { component: ButtonType; text: string } => {
    if (profile?.id === user.id)
      return { component: ButtonType.DELETE, text: t("buttons.delete") };
    if (following)
      return { component: ButtonType.OUTLINED, text: t("buttons.unfollow") };
    else return { component: ButtonType.FOLLOW, text: t("buttons.follow") };
  };

  const handleSubmit = () => {
    if (profile?.id === user.id) {
      service.deleteProfile().then(() => {
        dispatch(updateHasMorePosts(true));
        dispatch(updatePointer(''));
        
        cookie.removeToken();
        window.location.href = `/sign-in`;
      });
    } else {
      service.unfollowUser(profile!.id).then(async () => {
        setFollowing(false);
        setShowModal(false);
        await getProfileData();
      });
    }
  };

  useEffect(() => {
    getProfileData();
  }, [id]);

  if (!id) return null;

  const handleButtonAction = async () => {
    if (profile?.id === user.id) {
      setShowModal(true);
      setModalValues({
        title: t("modal-title.delete-account"),
        text: t("modal-content.delete-account"),
        type: ButtonType.DELETE,
        buttonText: t("buttons.delete"),
      });
    } else {
      if (following) {
        setShowModal(true);
        setModalValues({
          text: t("modal-content.unfollow"),
          title: `${t("modal-title.unfollow")} @${profile?.username}?`,
          type: ButtonType.FOLLOW,
          buttonText: t("buttons.unfollow"),
        });
      } else {
        await service.followUser(id);
        service.getProfile(id).then((res) => setProfile(res));
      }
      return await getProfileData();
    }
  };

  const getProfileData = async () => {
    try{
      const profResponse: User = await service.getProfile(id);
      if(profResponse.profilePicture) {
        const avatarUrl: string = await service.getAvatarUrl(profResponse.profilePicture)
        profResponse.profilePicture = avatarUrl;
      }
      setProfile(profResponse);
      setFollowing(
        profResponse
          ? profResponse?.followers.some((follow: Follow) => follow.followerId === user.id && !follow.deletedAt)
          : false
      );
      setFollower(
        profResponse
          ? user.follows.some((follow: Follow) => follow.followedId === profResponse.id && !follow.deletedAt)
          : false
      )
    }
    catch(e) {
      service.getProfileView(id)
        .then((res) => {
          setProfile(res);
          setFollowing(false);
        })
        .catch((error2) => {
          console.log(error2);
        });
    };
  };

  return (
    <>
      <StyledContainer
        maxHeight={"100vh"}
        borderRight={"1px solid #ebeef0"}
        flex={2}
        maxWidth={"600px"}
      >
        {profile && (
          <>
            <StyledContainer
              borderBottom={"1px solid #ebeef0"}
              maxHeight={"212px"}
              padding={"16px"}
            >
              <StyledH5>{profile?.name}</StyledH5>
              <StyledContainer
                alignItems={"center"}
                padding={"24px 0 0 0"}
                flexDirection={"row"}
              >
                <ProfileInfo
                  name={profile!.name!}
                  username={profile!.username}
                  profilePicture={profile!.profilePicture}
                />
                <div >
                  <Button
                    buttonType={handleButtonType().component}
                    size={"95px"}
                    onClick={handleButtonAction}
                    text={handleButtonType().text}
                  />
                  {follower && following &&
                    <MyButton
                      buttonVariant={MyButtonVariant.BLACK}
                      buttonSize={MyButtonSize.SMALL}
                      onClick={()=> navigate(`/chat/${user.id}/${profile.id}`)}
                      text={'Chat'}
                    />
                  }
                </div>
              </StyledContainer>
            </StyledContainer>
            <StyledContainer width={"100%"}>
              {profile.followers ? (
                <ProfileFeed profilePicture={profile.profilePicture}/>
              ) : (
                <StyledH5>Private account</StyledH5>
              )}
            </StyledContainer>
            {createPortal(
              <Modal
                show={showModal}
                text={modalValues.text}
                title={modalValues.title}
                acceptButton={
                  <Button
                    buttonType={modalValues.type}
                    text={modalValues.buttonText}
                    size={"MEDIUM"}
                    onClick={handleSubmit}
                  />
                }
                onClose={() => {
                  setShowModal(false);
                }}
              />, document.body
            )}
          </>
        )}
      </StyledContainer>
    </>
  );
};

export default ProfilePage;
