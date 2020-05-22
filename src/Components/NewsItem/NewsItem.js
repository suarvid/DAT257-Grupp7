import React from "react";
import "./newsitem.css";
import { withRouter, Link, Route } from "react-router-dom";
import PostDetailView from "../../Pages/Home/PostDetailView";
import "../../globalstyles.css";
import CardWrapper from "../../CardWrapper/CardWrapper";

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
    const publishedTime = this.getPublishedTime();
    return (
      <withRouter>
        <CardWrapper>
          <div className="newsContainer" align="center">
            <div className="newsitem-header news-child">
              <Link
                className="newsitem-header"
                to={{
                  pathname: `inlägg/${this.props.data.id}/`,
                  state: {
                    title: this.props.data.title,
                    image: this.props.data.image,
                    content: this.props.data.content,
                    author: this.props.data.author,
                    publishedTime: publishedTime,
                  },
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
              <img
                class="newsImage news-child"
                src={this.props.data.image}
                alt=""
              />
            </div>
            <p className="truncate news-child">{this.props.data.content}</p>

            <h4 className="published news-child">
              Publicerad av {this.props.data.author}
              {publishedTime}
            </h4>
          </div>
        </CardWrapper>
      </withRouter>
    );
  }
}

export default withRouter(NewsItem);
