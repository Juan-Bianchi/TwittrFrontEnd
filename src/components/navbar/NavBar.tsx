import React, { useEffect, useRef, useState } from "react";
import NavItem from "./navItem/NavItem";
import { useLocation, useNavigate } from "react-router-dom";
import { StyledTweetButton } from "../tweet-button/StyledTweetButton";
import TweetModal from "../tweet-modal/TweetModal";
import { IconType, LogoIcon } from "../icon/Icon";
import Avatar from "../common/avatar/Avatar";
import LogoutPrompt from "./logout-prompt/LogoutPrompt";
import ThreeDots from "../common/ThreeDots";
import { useTranslation } from "react-i18next";
import Icon from "../../assets/icon.jpg";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { StyledNavBarContainer } from "./NavBarContainer";
import { StyledContainer } from "../common/Container";
import { StyledIconContainer } from "./IconContainer";
import { StyledNavItemsContainer } from "./navItem/NavItemsContainer";
import { StyledP } from "../common/text";
import { useHttpRequestService } from "../../service/HttpRequestService";
import { setUser, updateHasMorePosts, updatePointer } from "../../redux/user";
import { MyButtonSize, MyButtonVariant } from "../my-button/StyledMyButton";
import MyButton from "../my-button/MyButton";
import { createPortal } from "react-dom";

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const service = useHttpRequestService()
  const user = useAppSelector((state) => state.user.user);
  const [tweetModalOpen, setTweetModalOpen] = useState(false);
  const [logoutOpen, setLogoutOpen] = useState(false);
  const promptRef = useRef<HTMLDivElement>(null)
  const { t } = useTranslation();
  const handleAvatarClick = () => {
    if (window.innerWidth < 1265) {
      handleLogout();
    } else {
      navigate(`/profile/${user.id}`);
    }
  };

  const handleLogout = () => {
    setLogoutOpen(!logoutOpen);
  };

  const handleClickOutsideLogoutPrompt = (event: MouseEvent)=> {
    if(promptRef.current && !promptRef.current.contains(event.target as Node)) {
      setLogoutOpen(false)
    }
  }

  const handleSetUser = async ()=> {
    try {
      const userReloaded = await service.me();
      if(user.profilePicture && !user.profilePicture.startsWith('ht')) {
        const avatarUrl: string = await service.getAvatarUrl(user.profilePicture)
        user.profilePicture = avatarUrl;
        console.log(user.profilePicture)
      }
      dispatch(setUser(userReloaded));
    }
    catch(e) {
      navigate("/sign-in");
    }
    
  }

  useEffect(()=> {
    if(user && user.id === ''){
      handleSetUser()
    }
    document.addEventListener('click', handleClickOutsideLogoutPrompt);

    return ()=> document.removeEventListener('click', handleClickOutsideLogoutPrompt)
  }, [])

  return (
    <StyledNavBarContainer>
      <StyledContainer flex={1}>
        <StyledIconContainer>
          <LogoIcon />
        </StyledIconContainer>
        <StyledNavItemsContainer>
          <NavItem
            title={t("navbar.home")}
            onClick={() => {
              dispatch(updatePointer(''));
              dispatch(updateHasMorePosts(true));
              navigate("/");
            }}
            icon={IconType.HOME}
            selectedIcon={IconType.ACTIVE_HOME}
            active={location.pathname === "/"}
          />
          <NavItem
            title={t("navbar.profile")}
            onClick={() => {
              navigate(`/profile/${user.id}`);
            }}
            icon={IconType.PROFILE}
            selectedIcon={IconType.ACTIVE_PROFILE}
            active={location.pathname === `/profile/${user?.id}`}
          />
          {!location.pathname.includes('/chat/') && 
            <StyledTweetButton
              onClick={() =>
                window.innerWidth > 600
                  ? setTweetModalOpen(true)
                  : navigate("/compose/tweet")
              }
            >
              +
            </StyledTweetButton>
          }
        </StyledNavItemsContainer>
        <StyledContainer width={"100%"}>
        <MyButton
            buttonSize={MyButtonSize.MEDIUM}
            text={'Tweet'}
            buttonVariant={MyButtonVariant.FULFILLED} 
            onClick={() => {
              setTweetModalOpen(true);
            }}
          />
        </StyledContainer>
        {createPortal(
          <TweetModal
            open={tweetModalOpen}
            onClose={() => {
              setTweetModalOpen(false);
            }}
          />, document.body
        )}
      </StyledContainer>
      <StyledContainer
        flex={1}
        maxHeight={"48px"}
        flexDirection={"row"}
        gap={"8px"}
        alignItems={"center"}
        ref={promptRef}
        position={"fixed"}
        top={"92%"}
        left={"15%"}
        width={"auto"}
      >
        <LogoutPrompt show={logoutOpen} />
        <Avatar
          src={user?.profilePicture ?? Icon}
          onClick={handleAvatarClick}
          alt={user?.name ?? ""}
        />
        <StyledContainer
          width={"100%"}
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <StyledContainer padding={"4px 0"} gap={"4px"}>
            <StyledP primary>{user?.name}</StyledP>
            <StyledP primary={false}>{`@${user?.username}`}</StyledP>
          </StyledContainer>
          <ThreeDots onClick={handleLogout} />
        </StyledContainer>
      </StyledContainer>
    </StyledNavBarContainer>
  );
};

export default NavBar;
