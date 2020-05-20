import React from "react";
import "./newsitem.css";
import { withRouter, Link, Route } from "react-router-dom";
import PostDetailView from "../../Pages/Home/PostDetailView";
import '../../globalstyles.css';

class NewsItem extends React.Component {
  getPublishedTime() {
    let minutes;
    if (this.props.data.date.getMinutes() < 10) {
      minutes = "0" + this.props.data.date.getMinutes();
    } else {
      minutes = this.props.data.date.getMinutes();
    }
    let publishedTime =
      ", " +
      this.props.data.date.getDate() +
      "/" +
      this.props.data.date.getMonth() +
      " klockan " +
      this.props.data.date.getHours() +
      ":" +
      minutes;
    return publishedTime;
  }
  render() {
    return (
      <withRouter>
        <div className="newsContainer" align="center">
          <div className="newsitem-header news-child">
            <Link
              className="newsitem-header"
              to={{
                pathname: `inlägg/${this.props.data.id}/`,
                state: this.props.data,
              }}
            >
              {this.props.data.title}
            </Link>

            <Route
              path={`inlägg/${this.props.data.id}/`}
              component={PostDetailView}
            />
          </div>
          <div className="imageContainer">
          {this.props.data.images.map((image) => (
            <img class="newsImage news-child" src={image} alt="Alt" />
          ))}
          </div>
          <p className="truncate news-child">{this.props.data.content}</p>

          <h4 className="published news-child">
            Publicerad av {this.props.data.author}
            {this.getPublishedTime()}
          </h4>
        </div>
      </withRouter>
    );
  }
}

export default withRouter(NewsItem);
