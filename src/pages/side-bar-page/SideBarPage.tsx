import React, { ReactNode } from "react";
import NavBar from "../../components/navbar/NavBar";
import { StyledSideBarPageWrapper } from "./SideBarPageWrapper";

export const SideBarPage = ({ children }: { children: ReactNode }) => {
  return (
    <StyledSideBarPageWrapper>
      <NavBar />
      {children}
    </StyledSideBarPageWrapper>
  );
};

export default SideBarPage;
