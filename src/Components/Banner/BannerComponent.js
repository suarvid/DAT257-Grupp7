import React from "react";
import logo from "../Logo2.png";
import "./BannerComponent.css";

function BannerComponent() {
  return (
    <div className="bannerHeader">
      <a href="/" style={{ textAlign: 'center' }}>
        <img className="logoHeader" src={logo} alt="logo" />
      </a>
    </div>
  );
}

export default BannerComponent;
