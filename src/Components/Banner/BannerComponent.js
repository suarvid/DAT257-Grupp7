import React from "react";
import niamotion from "./niamotion.jpg";
import logo from "../Logo2.png";

function BannerComponent(){
    return(
    <div style={{padding: '30px', width:'100%'}}>
      <img src={logo} alt="logo" width="200%" height='180px' />
    </div>
    )
}

export default BannerComponent;
