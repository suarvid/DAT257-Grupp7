

import React from 'react'
import './newsitem.css'
import { Typography, Slider, Switch } from 'antd';
import { withRouter, Redirect, Link, NavLink, Route, BrowserRouter as Router } from 'react-router-dom';
import Login from '../../Pages/Login/Login';
import PostDetailView from '../../Pages/Home/PostDetailView';

class NewsItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <withRouter>
                <div className="newsitem" align='center'>
                    <Link to={{
                        pathname: `post/${this.props.data.id}/`,
                        state: this.props.data
                    }}>
                        {this.props.data.title}
                    </Link>

                    <Route
                        path={`post/${this.props.data.id}/`}
                        component={PostDetailView} />
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
            
            </withRouter>
        );
    }

}



export default NewsItem


