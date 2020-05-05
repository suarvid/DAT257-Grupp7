import React from "react";
import niamotion from "./niamotion.jpg";
import logo from "../Logo2.png";
import './BannerComponent.css'; 

function BannerComponent(){
    return(
    <div className="bannerHeader">
      <img src={logo} alt="logo" width="100%" height="100%"/>
    </div>
    )
}

export default BannerComponent;
