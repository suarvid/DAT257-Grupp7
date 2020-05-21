import React from "react";
import NewsItem from "../../Components/NewsItem/NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";
import "../../globalstyles.css";
import axios from "axios";

class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postCounter: 0,
      backendPosts: [],
      loadedPosts: [],
      hasMorePosts: true,
    };
  }

  componentDidMount() {
    this.fetchAllPosts();
  }

  fetchAllPosts = () => {
    axios.get(`http://127.0.0.1:8000/api/post/`)
      .then(response => {
        const posts = response.data.map(post => {
          return {
            id: post.id,
            title: post.title,
            content: post.content,
            image: post.image,
            date: new Date(post.date_posted),
            author: post.author 
          }
        }).sort((a, b) => a.date < b.date ? 1 : -1)
        this.setState({
          backendPosts: posts,
        })
        this.loadItems()
      }).catch(error => { console.log(error) })
  }

  //Arbitrarily set to loading 3 posts at a time
  loadItems = () => {
    let loadArray = [];
    for (let i = 0; i < 3; i++) {
      if (this.state.postCounter >= this.state.backendPosts.length) {
        break;
      }
      loadArray.push(this.state.backendPosts[this.state.postCounter]);
      this.state.postCounter++;
    }

    let soonToBeLoadedPosts = this.state.loadedPosts.concat(loadArray).sort((a, b) => a.date < b.date ? 1 : -1)
    this.setState({
      loadedPosts: soonToBeLoadedPosts,
      hasMorePosts: soonToBeLoadedPosts.length < this.state.backendPosts.length, 
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
      <div className="textPageContainer">
        <InfiniteScroll
          dataLength={this.state.loadedPosts.length}
          hasMore={this.state.hasMorePosts}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Du har läst alla nyhetsinlägg!</b>
            </p>
          }
          style={{ overflowX: 'hidden' }}
        >
          {this.state.loadedPosts.map((item) => (
            <NewsItem key={item.id} data={item} />
          ))}
        </InfiniteScroll>
        {showMorePostsButton}
      </div>
    );
  }
}

export default PostList;
