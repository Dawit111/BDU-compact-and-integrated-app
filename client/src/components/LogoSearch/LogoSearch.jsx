import React from "react";
import Logo from "../../img/logoo.png";
import './LogoSearch.css'
import { UilSearch } from '@iconscout/react-unicons'
const LogoSearch = () => {
  return (
    <div className="LogoSearch">
      <img src={Logo} alt="" />
      <div className="Search">
          <input style={{fontSize: "1rem"}}type="text" placeholder="Search"/>
          <div className="s-icon">
                <UilSearch/>
          </div>
      </div>
    </div>
  );
};

export default LogoSearch;
