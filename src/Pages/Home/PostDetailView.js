import React from "react";
import axios from "axios";
import { Card, Button } from 'antd';
import { Redirect } from 'react-router-dom';
class PostDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post :{}
        }
    }



    componentDidMount() {
        const { handle } = this.props.match.params
        const data = this.props.location.state
        this.setState({
             post : data
    })
}

render() {
    const imgs = this.props.location.state.images

    return (
        <div align = "center">
            <h1>{this.props.location.state.title}</h1>
            {(imgs.map(image => <img class="newsimage" src={image} />))}

            <p>{this.state.post.content}</p>

        </div>
    );
}
}

export default PostDetail;
