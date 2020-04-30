import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./index.css";
import Navbar from "./Navigation/NavigationBar/NavigationBar";
import Footer from "../src/Components/FooterComponent/FooterComponent.js";
import "../src/Components/FooterComponent/Footer.css";

export default function App() {
  return (
    <div>
      <Navbar />
      <Footer />
    </div>
  );
}
