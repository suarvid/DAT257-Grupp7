import React from "react";
import "./PostDetailView.css";
import "../../globalstyles.css";

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
    const { title, content, image } = this.state.post;

    return (
      <div className="postContainer">
        <h1 className="postTitle">{title}</h1>
        <div className="postImageContainer">
          <img class="newsimage news-child" src={image} alt="" />
        </div>
        <p className="postContent">{content}</p>
        <h4 className = "published">
          Publicerad av {this.state.post.author}
          {this.state.post.publishedTime}
        </h4>
      </div>
    );
  }
}

export default PostDetail;
