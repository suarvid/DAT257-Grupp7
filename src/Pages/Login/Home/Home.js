import React from "react";
import BannerComponent from "../../../Components/Banner/BannerComponent";
import PostListView from './PostListView'
import "./Home.css";

function Home() {
  return (
    <div>
      <div className="first">
        <div className="banner">
          <h3>Ingående företag</h3>
          <BannerComponent />
          <PostListView/>
        </div>
      </div>
      <div className="second">
        <div className="aktiviteter">
          <h3>Aktiviteter i närtid</h3>
        </div>
      </div>
    </div>
  );
}

export default Home;
