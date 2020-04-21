import React from 'react'
import './newsitem.css'
import { Link, Route, withRouter, BrowserRouter as Router, Switch, NavLink } from 'react-router-dom';
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
                            <Link to={{
                                pathname :`/post/${this.props.data.id}/`,
                                state: {
                                    id: this.props.data.id,
                                    title: this.props.data.title,
                                    content: this.props.data.content,
                                    author: this.props.data.author
                                }
                                }}>
                                {this.props.data.title}
                            </Link>
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



export default withRouter(NewsItem);


