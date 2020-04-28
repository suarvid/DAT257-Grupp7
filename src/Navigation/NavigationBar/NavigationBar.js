import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink, useRouteMatch, useParams } from "react-router-dom";
import { Layout, Menu} from 'antd';
import Home from '../../Pages/Home/Home';
import Booking from '../../Pages/Booking/Booking';
import Activities from '../../Pages/Activities/Activities';
import About from '../../Pages/About/About';
import Join from '../../Pages/Join/Join';
import Login from '../../Pages/Login/Login';
import ActivityDetail from '../../Pages/Activities/ActivityDetailView';
import './NavigationBar.css'
import Logo from '../../Components/Logo'
import MenuItem from 'antd/lib/menu/MenuItem';
import PostList from '../../Pages/Home/PostListView';
import PostDetail from '../../Pages/Home/PostDetailView' ;
import Banner from '../../Components/Banner/BannerComponent';


const { Header, Content, Footer } = Layout;

class NavigationBar extends Component {

    render() {
        return (
            <Router>
            
            <Layout>
            <Header style={{position:'fixed', zIndex: '1', width: '100%', backgroundColor:'white'}}>
            <div className="bannerHeader"> 
            <Banner/>
            </div>
  <Menu  mode="horizontal"  style={{position:'fixed', zIndex: 'auto', width: '100%', backgroundColor:'#808080', color:'white', marginTop:0, height: 64, fontSize:'24px'}}>
      <Menu.Item key="home" style={{float:'left', display:'inline-block', justifyContent:"space-around",alignItems:'center', width:"100px", marginTop:'12px'}}>
          <NavLink to="/" style={{textDecoration: 'none', color:'white'}}>
            Hem
          </NavLink>
      </Menu.Item>
      <Menu.Item key="activities" style={ {float:'left', display:'flex', justifyContent:"space-around", alignItems:'center', borderLeft: '1px solid white', width:"145px", marginTop:'12px'}}> 
          <NavLink activeClassName="navItemSelected" to="/activities" style={{textDecoration: 'none', color:'white'}}>
              Utbud
          </NavLink> 
      </Menu.Item>
      <Menu.Item key="booking" style={ {float:'left', display:'flex', justifyContent:"space-around", alignItems:'center', borderLeft: '1px solid white', width:"130px", marginTop:'12px'}}>
          <NavLink activeClassName="navItemSelected" to="/booking" style={{textDecoration: 'none', color:'white'}}>
              Shema
          </NavLink>
          </Menu.Item>
      <Menu.Item key="login" style={{float:'left', display:'flex', justifyContent:"space-around", alignItems:'center', borderLeft: '1px solid white', width:"130px", marginTop:'12px'}}>
          <NavLink activeClassName="navItemSelected" to="/login" style={{textDecoration: 'none', color:'white'}}> 
              Priser
          </NavLink>
      </Menu.Item>
      <Menu.Item key="about" style={ {float:'left', display:'flex', justifyContent:"space-around", alignItems:'center', borderLeft: '1px solid white', width:"140px", marginTop:'12px'}}>
          <NavLink activeClassName="navItemSelected" to="/about" style={{textDecoration: 'none', color:'white'}}>
              Om oss
          </NavLink>
      </Menu.Item>
      <Menu.Item key="join" style={ {float:'left', display:'flex', justifyContent:"space-around", alignItems:'center', borderLeft: '1px solid white', width:"270px", marginTop:'12px'}}>
          <NavLink activeClassName="navItemSelected" to="/join" style={{textDecoration: 'none', color:'white'}}>
              Vill du också synas här?
          </NavLink>
      </Menu.Item>

      </Menu>
  </Header>

  <Content style={{ padding: '146px 50px', marginTop: 0 }} />


            </Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/booking" component={Booking} />
              <Route exact path="/activities" component={Activities} />
              <Route exact path="/activities/:activityID/" component={ActivityDetail} />
              <Route exact path="/about" component={About} />
              <Route exact path="/join" component={Join} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/login/:userID" component={Booking} />
              <Route exact path='/post/:postID/' component={PostDetail} />

            </Switch>

            </Router>
        );
    }
}


/** Navigation calls for nested ones.
 * TODO: Right now, the routes lead to Booking-page, change that. Fix ID-calls. Fix layout
 * */
function goActivities(){
    return (
      <div>
        <Activities/>
        <ul>
          <li>
            <NavLink to={"/activities/:activityID"}>Yoga</NavLink>
          </li>
        </ul>
      </div>
    );
}
 

export default NavigationBar;
