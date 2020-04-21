import React from "react";
import { Card , Button } from 'antd';
import { Redirect } from 'react-router-dom'; 
class PostDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {}
        }
    } 

    componentDidMount() {
        console.log(this.props.location)
        const data = this.props.location.state;
        this.setState({
            post: data
        })
    }


 //Note: important to be consistent with trailing slashes in frontend and backend
    handleDelete = (event) => {
        // this.setState({
        //     redirect: true
        // })
        // const postID = this.props.match.params.postID;
    }
    
    render() {
        return (
            <div>
                {/* {this.renderRedirect()} */}
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
