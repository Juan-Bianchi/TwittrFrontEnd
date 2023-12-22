import React from "react";
import TabBar from "./tab-bar/TabBar";
import logo from "../../../../assets/logo.png";
import icon from "../../../../assets/icon.jpg";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../../../redux/hooks";
import { StyledHeaderContainer } from "./HeaderContainer";

const Header = () => {
  const { user } = useAppSelector((state) => state.user);
  const { t } = useTranslation();

  return (
    <>
      <StyledHeaderContainer>
        <div className="title-container">
          <img src={user.profilePicture ?? icon} className="icon" alt="Icon" />
          <img src={logo} className="logo" alt="Logo" />
          <h5>{t("header.home")}</h5>
        </div>
        <TabBar />
      </StyledHeaderContainer>
    </>
  );
};

export default Header;
