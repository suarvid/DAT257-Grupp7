import React from "react";
import "./PostDetailView.css";

class PostDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {},
    };
  }

  componentDidMount() {
    const data = this.props.location.state;
    this.setState({
      post: data,
    });
  }

  render() {
    const { title, content, image } = this.state.post

    return (
        <div className="postContainer">
          <h1 className="postTitle">{title}</h1>
          <img class="newsimage news-child" src={image} alt="Alt" />
          <p className="postContent">{content}</p>
        </div>
    );
  }
}

export default PostDetail;
