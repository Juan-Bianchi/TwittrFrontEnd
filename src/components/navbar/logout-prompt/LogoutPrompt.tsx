import React, { useEffect, useState } from "react";
import Modal from "../../modal/Modal";
import logo from "../../../assets/logo.png";
import Button from "../../button/Button";
import { useTranslation } from "react-i18next";
import SwitchButton from "../../switch/SwitchButton";
import { ButtonType } from "../../button/StyledButton";
import { useAppSelector } from "../../../redux/hooks";
import { StyledPromptContainer } from "./PromptContainer";
import { StyledContainer } from "../../common/Container";
import { StyledP } from "../../common/text";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import { updateHasMorePosts, updatePointer } from "../../../redux/user";
import cookie from "../../../service/Cookie";

interface LogoutPromptProps {
  show: boolean;
}

const LogoutPrompt = ({ show }: LogoutPromptProps) => {
  const [showPrompt, setShowPrompt] = useState<boolean>(show);
  const [showModal, setShowModal] = useState<boolean>(false);
  const user = useAppSelector((state) => state.user.user);
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  const handleClick = () => {
    setShowModal(true);
  };

  const handleLanguageChange = () => {
    if (i18n.language === "es") {
      i18n.changeLanguage("en");
    } else {
      i18n.changeLanguage("es");
    }
  };

  const handleLogout = () => {
    dispatch(updateHasMorePosts(true));
    dispatch(updatePointer(''));
    
    cookie.removeToken();
    window.location.href = `/sign-in`;
  };

  useEffect(() => {
    setShowPrompt(show);
  }, [show]);

  return (
    <>
      {showPrompt && (
        <StyledPromptContainer>
          <StyledContainer
            flexDirection={"row"}
            gap={"16px"}
            borderBottom={"1px solid #a4ccf46f"}
            padding={"16px"}
            alignItems={"center"}
          >
            <StyledP primary>Es:</StyledP>
            <SwitchButton
              checked={i18n.language === "es"}
              onChange={handleLanguageChange}
            />
          </StyledContainer>
          <StyledContainer onClick={handleClick} alignItems={"center"}>
            <StyledP primary>{`${t("buttons.logout")} @${
              user.username
            }`}</StyledP>
          </StyledContainer>
        </StyledPromptContainer>
      )}
      {createPortal(
        <Modal
          show={showModal}
          text={t("modal-content.logout")}
          img={logo}
          title={t("modal-title.logout")}
          acceptButton={
            <Button
              buttonType={ButtonType.FOLLOW}
              text={t("buttons.logout")}
              size={"MEDIUM"}
              onClick={handleLogout}
            />
          }
          onClose={() => setShowModal(false)}
        />, document.body
      )}
    </>
  );
};

export default LogoutPrompt;
