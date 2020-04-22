import React from "react";
import axios from 'axios';
import Post from './Post'
import PostForm from '../../Components/ArresComponent/ArresComponent';

class PostList extends React.Component {
    state = {
        posts: []
    }
    
    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/post/')
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
