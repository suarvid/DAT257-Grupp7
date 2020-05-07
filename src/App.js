import React from "react";
import "./index.css";
import HamburgerMenu from "./Navigation/NavigationBar/HamburgerMenu";
import BaseRouter from "./routes";
import Footer from "./Components/FooterComponent/FooterComponent";
import Banner from "./Components/Banner/BannerComponent";

export default function App() {
  return (
    <div>
      <Banner />
      <HamburgerMenu />
      <BaseRouter></BaseRouter>
      <Footer />
    </div>
  );
}
