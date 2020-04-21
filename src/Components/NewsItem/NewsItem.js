

import React from 'react'
import './newsitem.css'
import { Typography, Slider, Switch } from 'antd';
import { Redirect, Link, NavLink, Route, BrowserRouter as Router } from 'react-router-dom';
import Login from '../../Pages/Login/Login';
import PostDetailView from '../../Pages/Home/PostDetailView';

class NewsItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <div className="newsitem" align='center'>
                    <h1>
                        <NavLink to={`post/${this.props.data.id}/`} onClick={this.navigation}>
                            {this.props.data.title}
                        </NavLink>
                    </h1>
                    {(this.props.data.images.map(image => <img class="newsimage" src={image} />))}
                    <p class="truncate">
                        {this.props.data.content}
                    </p>
                    <button class="read-more" onClick={this.onClickHandler}>
                        Läs mer
                 </button>
                    <h4>
                        Publicerad av {this.props.data.author}
                    </h4>
                </div>
                <Switch>
                    <Route exact path={`post/${this.props.data.id}/`} component={PostDetailView} />
                </Switch>
            </Router>
        );
    }

}



export default NewsItem


