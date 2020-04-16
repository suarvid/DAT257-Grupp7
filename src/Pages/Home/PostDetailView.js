import React from "react";
import axios from "axios";
import { Card , Button } from 'antd';
import { Redirect } from 'react-router-dom'; 
class PostDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {
                ID: this.props.match.params.postID
            },
            redirect: false
        }
    } 

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/' />
        }
    }

 //Note: important to be consistent with trailing slashes in frontend and backend
    handleDelete = (event) => {
        this.setState({
            redirect: true
        })
        const postID = this.props.match.params.postID;
        axios.delete(`http://localhost:8000/api/post/${postID}/`, {
            data: {
                id: this.state.post.ID,
            },
        })
        .then( response =>  {
            console.log(response);
            console.log(response.data);
        });
    }
    
    componentDidMount() {
        axios.get(`http://localhost:8000/api/post/${this.state.post.ID}`)
            .then( response => {
                this.setState({
                    post: response.data
                });
            })
    }
    
    render() {
        return (
            <div>
                {this.renderRedirect()}
                <Card title={this.state.post.title}>
                    <p> {this.state.post.content} </p>
                        <form>
                                <Button type="danger" htmlType="submit" onClick={this.handleDelete}>Delete Post</Button>
                        </form>
                </Card>
            </div>
        );
    }
}

export default PostDetail;
