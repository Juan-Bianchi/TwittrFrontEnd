import type { MouseEventHandler } from "react";
import React from "react";
import { Icon, IconType } from "../../icon/Icon";
import { StyledNavItemContainer } from "./NavItemContainer";

interface NavItemProps {
  title: string;
  icon: IconType;
  selectedIcon: IconType;
  onClick: MouseEventHandler;
  active: boolean;
}

const NavItem = ({
  title,
  icon,
  selectedIcon,
  onClick,
  active,
}: NavItemProps) => {
  return (
    <StyledNavItemContainer onClick={onClick}>
      {active ? Icon({})[selectedIcon] : Icon({})[icon]}
      <p className={active ? "active" : ""}>{title}</p>
    </StyledNavItemContainer>
  );
};
export default NavItem;
