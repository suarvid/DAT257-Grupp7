import React from "react";
import axios from 'axios';
import Post from './Post'
import PostForm from '../../ArresComponent';

class PostList extends React.Component {
    state = {
        posts: []
    }
    
    componentDidMount() {
        axios.get('https://sjuanbackend.herokuapp.com/api/post/')
            .then(res => {
                this.setState({
                    posts: res.data
                });
                console.log(res.status);
            });
    }

    render() {
        return (
            <div>
                <Post data={this.state.posts} /> <br />
                <PostForm />
            </div>
        );
    }
}

export default PostList;
