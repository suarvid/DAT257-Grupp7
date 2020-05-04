import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./index.css"
import Navbar from './Navigation/NavigationBar/NavigationBar';
import HamburgerMenu from './Navigation/NavigationBar/HamburgerMenu'
import BaseRouter from './routes'


export default function App() {
  return (
    <div>
    <HamburgerMenu/>
    <BaseRouter></BaseRouter>
    </div>
  );
}
