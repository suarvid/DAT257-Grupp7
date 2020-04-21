import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";
import { Layout, Menu} from 'antd';
import Home from '../../Pages/Home/Home';
import Booking from '../../Pages/Booking/Booking';
import Activities from '../../Pages/Activities/Activities';
import About from '../../Pages/About/About';
import Join from '../../Pages/Join/Join';
import Login from '../../Pages/Login/Login';
import './NavigationBar.css'


const { Header, Content, Footer } = Layout;

class NavigationBar extends Component {
    /**state = {
        current: 'home',
      }
      handleClick = (e) => {
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
      }
   */
    render(){
        return(
            <Router>
            
            <Layout>
                <Header style={{position:'fixed', zIndex: 1, width: '100%', backgroundColor:'darkseagreen', color:'dimgray', marginTop:0, height: 58}}>
  
                    <Menu  mode="horizontal">
                        <Menu.Item key="home" style={ {float:'left', display:'flex', justifyContent:"space-around", alignItems:'center', width:"50px"}}>
                            <NavLink to="/" style={{textDecoration: 'none', color:'dimgray'}}>
                                LogoPlaceholder
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item key="login" style={ {float:'right', display:'flex', justifyContent:"space-around", alignItems:'center', borderLeft: '1px solid dimgray', width:"100px"}}>
                            <NavLink activeClassName="navItemSelected" to="login" style={{textDecoration: 'none', color:'dimgray'}}> 
                                Login
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item key="join" style={ {float:'right', display:'flex', justifyContent:"space-around", alignItems:'center', borderLeft: '1px solid dimgray', width:"210px"}}>
                            <NavLink activeClassName="navItemSelected" to="join" style={{textDecoration: 'none', color:'dimgray'}}>
                                Vill du också synas här?
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item key="about" style={ {float:'right', display:'flex', justifyContent:"space-around", alignItems:'center', borderLeft: '1px solid dimgray', width:"100px"}}>
                            <NavLink activeClassName="navItemSelected" to="about" style={{textDecoration: 'none', color:'dimgray'}}>
                                Om oss
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item key="activities" style={ {float:'right', display:'flex', justifyContent:"space-around", alignItems:'center', borderLeft: '1px solid dimgray', width:"115px"}}> 
                            <NavLink activeClassName="navItemSelected" to="activities" style={{textDecoration: 'none', color:'dimgray'}}>
                                Aktiviteter
                            </NavLink> 
                        </Menu.Item>
                        <Menu.Item key="booking" style={ {float:'right', display:'flex', justifyContent:"space-around", alignItems:'center', borderLeft: '1px solid dimgray', width:"90px"}}>
                            <NavLink activeClassName="navItemSelected" to="/booking" style={{textDecoration: 'none', color:'dimgray'}}>
                                Boka
                            </NavLink>
                        </Menu.Item>
                    </Menu>
                </Header>

                <Content style={{ padding: '18px 50px', marginTop: 0 }}/>


            </Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/booking" component={Booking} />
              <Route exact path="/activities" component={Activities} />
              <Route exact path="/about" component={About} />
              <Route exact path="/join" component={Join} />
              <Route exact path="/login" component={Login} />
            </Switch>
            </Router>
        );
    }
}

export default NavigationBar;