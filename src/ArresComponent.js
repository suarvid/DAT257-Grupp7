import React from 'react'
import axios from 'axios';


class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: ''
        }
    } 


    handleTitleChange = (event) => {
        this.setState({
            title: event.target.value
        });
    }

    handleContentChange = (event) => {
        this.setState({
            content: event.target.value
        });
    }

    handleSubmit = (event) =>  {
        event.preventDefault();

        const postObj = {
            title: this.state.title,
            content: this.state.content
        }

        axios.post("http://127.0.0.1:8000/api/post/", 
                             postObj)
                            .then(function (response) {
                                console.log(response);
                            })
                            .catch(function (error) {
                                console.error(error);
                            });

        window.location.reload(true);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Title: 
                    <input type="text" onChange={this.handleTitleChange}/>
                </label>
                <br />
                <label>
                    Content: 
                    <input type="text" onChange={this.handleContentChange}/>
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default PostForm;
