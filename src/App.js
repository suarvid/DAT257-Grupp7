import React from "react";
import "./index.css";
import HamburgerMenu from "./Navigation/NavigationBar/HamburgerMenu";
import BaseRouter from "./routes";
import Footer from "./Components/FooterComponent/FooterComponent";
import Banner from "./Components/Banner/BannerComponent";

export default function App() {
  return (
    <div style={{ minHeight: "100vh", position: "relative" }}>
      <div style={{ paddingBottom: '11.8rem' }}>
        <Banner />
        <HamburgerMenu />
        <BaseRouter></BaseRouter>
      </div>
      <Footer />
    </div>
  );
}
