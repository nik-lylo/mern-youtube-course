import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import "./navLinkCustom.scss";

interface NavLinkCustomProps {
  text: string;
  path: string;
}

const NavLinkCustom: FC<NavLinkCustomProps> = ({ path, text }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive
          ? "nav-link-custom nav-link-custom_selected"
          : "nav-link-custom"
      }
      to={path}
    >
      {text}
    </NavLink>
  );
};

export default NavLinkCustom;
