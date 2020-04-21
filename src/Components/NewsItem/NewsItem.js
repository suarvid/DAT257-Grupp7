import React from 'react'
import './newsitem.css'
<<<<<<< HEAD
import { Link, Route, withRouter, BrowserRouter as Router, Switch, NavLink } from 'react-router-dom';
=======
import { Typography, Slider, Switch } from 'antd';
import { withRouter, Redirect, Link, NavLink, Route, BrowserRouter as Router } from 'react-router-dom';
import Login from '../../Pages/Login/Login';
>>>>>>> c76ea777a8f70f5381bf87de9a35bb5904f63d48
import PostDetailView from '../../Pages/Home/PostDetailView';
import { Layout } from 'antd';

class NewsItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <withRouter>
                <div className="newsitem" align='center'>
                    <h1 className="header">
                        <Link className="header" to={{
                            pathname: `post/${this.props.data.id}/`,
                            state: this.props.data
                        }}>
                            {this.props.data.title}
                        </Link>

                        <Route
                            path={`post/${this.props.data.id}/`}
                            component={PostDetailView} />

                        <br />
                        {(this.props.data.images.map(image => <img class="newsimage" src={image} />))}

                    </h1>
                    <p class="truncate">
                        {this.props.data.content}
                    </p>

                    <h4>
                        Publicerad av {this.props.data.author}
                    </h4>
                </div>

            </withRouter>
        );
    }

}



export default withRouter(NewsItem);


