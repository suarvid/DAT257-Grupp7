import React from "react";
import "./index.css";
import HamburgerMenu from "./Navigation/NavigationBar/HamburgerMenu";
import BaseRouter from "./routes";
import Footer from "./Components/FooterComponent/FooterComponent";
import Banner from "./Components/Banner/BannerComponent";

export default function App() {
  const footerHeight = '11rem'
  return (
    <div style={{ minHeight: "100vh", position: "relative" }}>
      <div style={{ paddingBottom: footerHeight }}>
        <Banner />
        <HamburgerMenu />
        <BaseRouter></BaseRouter>
      </div>
      <Footer style={{ height: footerHeight }} />
    </div>
  );
}
