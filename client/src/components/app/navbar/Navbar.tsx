import React, { FC } from "react";
import { RoutesEnum } from "../../../lib/enum/RoutesEnum";
import { useActions } from "../../../lib/hooks/useActions";
import NavLinkCustom from "../../UI/link/nav_link_custom/NavLinkCustom";
import "./navbar.scss";

const Navbar: FC = () => {
  const { setSignOut } = useActions();

  function handleClick() {
    setSignOut();
  }
  return (
    <div className="navbar">
      <div className="navbar__flex">
        <div className="navbar__title">Link shortening</div>
        <div className="navbar__links">
          <NavLinkCustom text="Create" path={RoutesEnum.CREATE} />
          <NavLinkCustom text="Links" path={RoutesEnum.LINKS} />
          <button className="navbar__btn" onClick={handleClick}>
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
