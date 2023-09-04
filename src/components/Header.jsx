import React from "react";
import netflixLogo from "../assets/images/Netflix_Logo_PMS.png";

const Header = () => {
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black">
      <img className="w-44" src={netflixLogo} alt="logo" />
    </div>
  );
};

export default Header;
