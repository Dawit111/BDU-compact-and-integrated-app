import React from "react";
import LogoSearch from "../../components/LogoSearch/LogoSearch";
import NavIcons from "../NavIcons/NavIcons";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <div className="navBar">
        <LogoSearch />
        <NavIcons />
      </div>
      <hr style={{ width: "100%", border: "0.1px solid #ececec" }} />
    </>
  );
};

export default NavBar;
