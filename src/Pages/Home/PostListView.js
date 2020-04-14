import React from "react";
import axios from 'axios';
import Post from './Post'

class PostList extends React.Component {
    state = {
        posts: []
    }
    
    componentDidMount() {
        axios.get('http://localhost:8000/api/post/')
            .then(res => {
                this.setState({
                    posts: res.data
                });
            });
    }

    render() {
        return (
            <div>
                <Post data={this.state.posts} /> <br />
            </div>
        );
    }
}

export default PostList;
