import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./index.css"
import Navbar from './Navigation/NavigationBar/NavigationBar';


export default function App() {
  return (
    <div>
    <Navbar/>
    </div>
  );
}
