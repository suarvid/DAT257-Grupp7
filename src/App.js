import React from "react";
import "./index.css"
import Navbar from './Navigation/NavigationBar/NavigationBar';
import HamburgerMenu from './Navigation/NavigationBar/HamburgerMenu'
import BaseRouter from './routes'
import Footer from './Components/Footer/FooterComponent'


export default function App() {
  return (
    <div>
    <HamburgerMenu/>
    <BaseRouter></BaseRouter>
    </div>
  );
}
