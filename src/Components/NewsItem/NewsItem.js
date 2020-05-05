import React from "react";
import "./newsitem.css";
import {
  withRouter,
  Link,
  Route,
} from "react-router-dom";
import PostDetailView from "../../Pages/Home/PostDetailView";

class NewsItem extends React.Component {
  render() {
    return (
      <withRouter>
        <div className="newsitem" align="center">
          <h1 className="newsitem-header">
            <Link
              className="newsitem-header"
              to={{
                pathname: `post/${this.props.data.id}/`,
                state: this.props.data,
              }}
            >
              {this.props.data.title}
            </Link>

            <Route
              path={`post/${this.props.data.id}/`}
              component={PostDetailView}
            />
          </h1>
          {this.props.data.images.map((image) => (
            <img class="newsimage" src={image} alt="Alt" />
          ))}

          <p class="truncate">{this.props.data.content}</p>

          <h4>Publicerad av {this.props.data.author}</h4>
        </div>
      </withRouter>
    );
  }
}

export default withRouter(NewsItem);
