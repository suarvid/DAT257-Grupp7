 import React from "react";
import logo from "../Logo2.png";
import "./BannerComponent.css";

function BannerComponent() {
  return (
    <div className="bannerHeader">
      <img className="logoHeader" src={logo} alt="logo" />
    </div>
  );
}

export default BannerComponent;