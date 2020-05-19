import React from "react";
import niamotion from "./niamotion.jpg";
import logo from "../Logo2.png";
import './BannerComponent.css'; 

function BannerComponent(){
    return(
    <div className="bannerHeader">
      <img src={logo} alt="logo" height="100%" width="100%"/>
    </div>
    )
}

export default BannerComponent;
