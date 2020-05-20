import React from "react";
import NewsItem from "../../Components/NewsItem/NewsItem";
import styles from "./PostListView.css";
import InfiniteScroll from "react-infinite-scroll-component";
import "../../globalstyles.css";
const lorem =
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet." +
  "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet,";
const loremlorem =
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet." +
  "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet," +
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet." +
  "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet," +
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet." +
  "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet," +
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet." +
  "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet," +
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet." +
  "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet,";

class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postCounter: 0,
      backendPosts: [
        {
          id: 1,
          title: "Test1",
          content: lorem,
          author: "me",
          images: [
            "https://cdn.pixabay.com/photo/2015/04/20/13/44/sports-731506_1280.jpg",
          ],
          date: new Date(),
        },
        {
          id: 2,
          title: "Test2",
          content: lorem,
          author: "you",
          images: [
            "https://cdn.pixabay.com/photo/2014/11/17/13/17/crossfit-534615_1280.jpg",
          ],
          date: new Date(),
        },

        {
          id: 3,
          title: "Test3",
          content: lorem,
          author: "unknown",
          images: [
            "https://cdn.pixabay.com/photo/2014/10/22/17/25/stretching-498256_1280.jpg",
          ],
          date: new Date(),
        },
        {
          id: 4,
          title: "Blir man en sämre människa av att löpa?",
          content: lorem,
          author: "Svar ja",
          images: [
            "https://www.runtastic.com/blog/wp-content/uploads/2018/08/thumbnail_1200x800-1-1024x683.jpg",
          ],
          date: new Date(),
        },
        {
          id: 5,
          title: "Test5",
          content: loremlorem,
          author: "unknown",
          images: [
            "https://nl7if2hjk9a2r1cql2qih3id-wpengine.netdna-ssl.com/wp-content/uploads/article-ath-benchpress.jpg",
          ],
          date: new Date(),
        },
        {
          id: 6,
          title: "Test7",
          content: loremlorem,
          author: "unknown",
          images: [
            "https://nl7if2hjk9a2r1cql2qih3id-wpengine.netdna-ssl.com/wp-content/uploads/article-ath-benchpress.jpg",
          ],
          date: new Date(),
        },
        {
          id: 7,
          title: "Test7",
          content: loremlorem,
          author: "unknown",
          images: [
            "https://nl7if2hjk9a2r1cql2qih3id-wpengine.netdna-ssl.com/wp-content/uploads/article-ath-benchpress.jpg",
          ],
          date: new Date(),
        },
      ],
      loadedPosts: [],
      hasMorePosts: true,
    };
  }

  componentDidMount() {
    this.loadItems();
  }

  //Arbitrarily set to loading 3 posts at a time
  //Will have to change this when integrating backend and http requests
  loadItems = () => {
    let loadArray = [];
    for (let i = 0; i < 3; i++) {
      if (this.state.postCounter >= this.state.backendPosts.length) {
        break;
      }
      loadArray.push(this.state.backendPosts[this.state.postCounter]);
      this.state.postCounter++;
    }

    let soonToBeLoadedPosts = this.state.loadedPosts.concat(loadArray);
    this.setState({
      loadedPosts: soonToBeLoadedPosts,
      hasMorePosts: soonToBeLoadedPosts.length < this.state.backendPosts.length, //Might be smarter to use postcounter here, more efficient
    });
  };

  render() {
    let showMorePostsButton;

    this.state.hasMorePosts
      ? (showMorePostsButton = (
          <div>
            <button className="secondary_button_large" onClick={this.loadItems}>
              Visa fler nyhetsinlägg{" "}
            </button>
          </div>
        ))
      : (showMorePostsButton = null);

    return (
      <div className="news-container">
        <h1 className="news-title">Nyhetsinlägg</h1>
        <InfiniteScroll
          dataLength={this.state.loadedPosts.length}
          hasMore={this.state.hasMorePosts}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Du har läst alla nyhetsinlägg!</b>
            </p>
          }
        >
          {this.state.loadedPosts.map((item) => (
            <NewsItem data={item} />
          ))}
        </InfiniteScroll>
        {showMorePostsButton}
      </div>
    );
  }
}

export default PostList;
