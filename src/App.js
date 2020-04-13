import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from "./Pages/About/About";
import Booking from "./Pages/Booking/Booking";
import Home from "./Pages/Home/Home";
import "./index.css"

export default function App() {
  return (
    <Router>
      <div className="body">
        <nav>
          <ul>
            <li>
              <Link to="/">Startsidan</Link>
            </li>
            <li>
              <Link to="/about">Om oss</Link>
            </li>
            <li>
              <Link to="/booking">Bokningar</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/booking">
            <Booking />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}