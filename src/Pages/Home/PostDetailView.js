import React from "react";
import axios from "axios";
import { Card , Button } from 'antd';
import { Redirect, useHistory } from "react-router-dom";

class PostDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {},
            postID: this.props.match.params.postID
        }
    } 

 //Note: important to be consistent with trailing slashes in frontend and backend
    handleDelete = (event) => {
        axios.delete(`http://localhost:8000/api/post/${this.state.postID}/`, {
            data: {
                id: this.state.postID,
            },
        })
        .then( response =>  {
            console.log(response);
            console.log(response.data);
        });
        let history = useHistory();
        history.pushState("/");
    }
    
    componentDidMount() {
        axios.get(`http://localhost:8000/api/post/${this.state.postID}`)
            .then( response => {
                this.setState({
                    post: response.data
                });
            })
    }
    
    render() {
        return (
                <Card title={this.state.post.title}>
                    <p> {this.state.post.content} </p>
                        <form>
                            <Button type="danger" htmlType="submit" onClick={this.handleDelete}>Delete Post</Button>
                        </form>
                </Card>
        );
    }
}

export default PostDetail;
