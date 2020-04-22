import React from "react";
import NewsItem from '../../Components/NewsItem/NewsItem';
import styles from './PostListView.css';
import InfiniteScroll from 'react-infinite-scroll-component';
const lorem = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
    + "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet,"


class PostList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.loadItems();
    }

    state = {
        hasMorePosts: true,
        postCounter: 0,
        posts: [
            {
                id: 1,
                title: 'Test1',
                content: lorem,
                author: 'me',
                images: ["https://cdn.pixabay.com/photo/2015/04/20/13/44/sports-731506_1280.jpg"]
            },
            {
                id: 2,
                title: 'Test2',
                content: lorem,
                author: 'you',
                images: ["https://cdn.pixabay.com/photo/2014/11/17/13/17/crossfit-534615_1280.jpg"]
            },
            {
                id: 3,
                title: 'Test3',
                content: lorem,
                author: 'unknown',
                images: ["https://cdn.pixabay.com/photo/2014/10/22/17/25/stretching-498256_1280.jpg"]
            },
            {
                id: 4,
                title: 'Blir man en sämre människa av att löpa?',
                content: lorem,
                author: 'Svar ja',
                images: ["https://www.runtastic.com/blog/wp-content/uploads/2018/08/thumbnail_1200x800-1-1024x683.jpg"]
            },
            {
                id: 5,
                title: 'Test5',
                content: lorem,
                author: 'unknown',
                images: ["https://nl7if2hjk9a2r1cql2qih3id-wpengine.netdna-ssl.com/wp-content/uploads/article-ath-benchpress.jpg"]
            }
        ],
        loadedPosts: []
    };

    loadItems = () => {
        console.log('Loading Items')
        console.log(this.state.hasMorePosts)
        for (let i = 0; i < this.state.posts.length; i++) {
            this.setState({
                loadedPosts: this.state.loadedPosts.concat(Array.from({ length: 20 })),
            });
            if (i == 5) {
                this.setState({
                    hasMorePosts: false
                })
            }
        }
        console.log(this.state.hasMorePosts)
    };

    render() {
        console.log('loaded posts:' + this.state.loadedPosts)
        console.log(this.state.loadedPosts.length)
        console.log(this.state.posts)
        return (
            <div align='center'>
                <h1>Nyheter</h1>
                {this.state.posts.map(item=> <NewsItem
                    data={item}
                />)}
                
                <InfiniteScroll
                    dataLength={this.state.loadedPosts.length}
                    next={this.loadItems}
                    hasMore={this.state.hasMorePosts}
                    loader={<div>Loading...</div>}
                    endMessage={
                        <p>Du har läst alla nyhetsinlägg!</p>
                    }
                >
                    <div>
                        {this.state.loadedPosts.map((id, index) => (
                            <div key={index}>
                                {index}
                            </div>
                        ))}
                    </div>
                </InfiniteScroll>
            </div>

        );
    }
}

export default PostList;
