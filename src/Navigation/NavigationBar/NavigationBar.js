import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import { Layout, Menu } from "antd";
import Home from "../../Pages/Home/Home";
import Booking from "../../Pages/Booking/Booking";
import Activities from "../../Pages/Activities/Activities";
import About from "../../Pages/About/About";
import Join from "../../Pages/Join/Join";
import Login from "../../Pages/Login/Login";
import ActivityDetail from "../../Pages/Activities/ActivityDetailView";
import "./NavigationBar.css";
import Logo from "../../Components/Logo";
import PostList from "../../Pages/Home/PostListView";
import PostDetail from "../../Pages/Home/PostDetailView";
import BookingForm from "../../Pages/Booking/BookingForm";


const { Header, Content, Footer } = Layout;

class NavigationBar extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Header
            style={{
              position: "fixed",
              zIndex: "auto",
              width: "100%",
              backgroundColor: "#B4C9B2",
              color: "#707070",
              marginTop: 0,
              height: 56,
            }}
          >
            <Menu mode="horizontal">
              <Menu.Item
                key="home"
                style={{
                  float: "left",
                  display: "inline-block",
                  alignItems: "center",
                  marginTop: -15,
                  position: "top",
                }}
              >
                <NavLink
                  to="/"
                  style={{ textDecoration: "none", color: "dimgray" }}
                >
                  <Logo />
                </NavLink>
              </Menu.Item>
              <Menu.Item
                key="login"
                style={{
                  float: "right",
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  borderLeft: "1px solid dimgray",
                  width: "100px",
                }}
              >
                <NavLink
                  activeClassName="navItemSelected"
                  to="/login"
                  style={{ textDecoration: "none", color: "dimgray" }}
                >
                  Login
                </NavLink>
              </Menu.Item>
              <Menu.Item
                key="join"
                style={{
                  float: "right",
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  borderLeft: "1px solid dimgray",
                  width: "210px",
                }}
              >
                <NavLink
                  activeClassName="navItemSelected"
                  to="/join"
                  style={{ textDecoration: "none", color: "dimgray" }}
                >
                  Vill du också synas här?
                </NavLink>
              </Menu.Item>
              <Menu.Item
                key="about"
                style={{
                  float: "right",
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  borderLeft: "1px solid dimgray",
                  width: "100px",
                }}
              >
                <NavLink
                  activeClassName="navItemSelected"
                  to="/about"
                  style={{ textDecoration: "none", color: "dimgray" }}
                >
                  Om oss
                </NavLink>
              </Menu.Item>
              <Menu.Item
                key="activities"
                style={{
                  float: "right",
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  borderLeft: "1px solid dimgray",
                  width: "115px",
                }}
              >
                <NavLink
                  activeClassName="navItemSelected"
                  to="/activities"
                  style={{ textDecoration: "none", color: "dimgray" }}
                >
                  Aktiviteter
                </NavLink>
              </Menu.Item>
              <Menu.Item
                key="booking"
                style={{
                  float: "right",
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  borderLeft: "1px solid dimgray",
                  width: "90px",
                }}
              >
                <NavLink
                  activeClassName="navItemSelected"
                  to="/booking"
                  style={{ textDecoration: "none", color: "dimgray" }}
                >
                  Boka
                </NavLink>
              </Menu.Item>
            </Menu>
          </Header>

          <Content style={{ padding: "17px 50px", marginTop: 0 }} />
        </Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/booking" component={Booking} />
          <Route exact path="/activities" component={Activities} />
          <Route
            exact
            path="/activities/:activityID/"
            component={ActivityDetail}
          />
          <Route exact path="/about" component={About} />
          <Route exact path="/join" component={Join} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/login/:userID" component={Booking} />
          <Route exact path="/" component={PostList} />      
          <Route exact path="/post/:postID/" component={PostDetail} />
          <Route exact path="/booking/:bookingID/" component={BookingForm} />
        </Switch>
      </Router>
    );
  }
}

/** Navigation calls for nested ones.
 * TODO: Right now, the routes lead to Booking-page, change that. Fix ID-calls. Fix layout
 * */
function goActivities() {
  return (
    <div>
      <Activities />
      <ul>
        <li>
          <NavLink to={"/activities/:activityID"}>Yoga</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavigationBar;
