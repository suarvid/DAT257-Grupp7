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
    return (
        <div>
            <h1>{this.props.location.state.title}</h1>
            {console.log(this.state.data)}
            <h1>{this.state.post.content}</h1>
        </div>
    );
}
}

export default PostDetail;
