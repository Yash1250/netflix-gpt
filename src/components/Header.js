/** @format */

import React from "react";
import netflixLogo from "../images/logo.png";

const Header = () => {
  return (
    <div>
      <div className="absolute">
        <img className="w-2/12" src={netflixLogo} alt="Logo" />
      </div>
    </div>
  );
};

export default Header;
