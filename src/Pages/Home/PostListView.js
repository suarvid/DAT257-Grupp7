import React from "react";
import NewsItem from '../../Components/NewsItem/NewsItem';
import styles from './PostListView.css'
const lorem = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
    + "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet,"
class PostList extends React.Component {

    state = {
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
            }
        ]
    };

    loadItems = () => {
        let items = [];
        for (let i = 0; i < this.state.posts.length; i++) {
            items.push(<NewsItem data={this.state.posts[i]} />)
            items.push(<br />)
        }
        return <div className={styles.itemFeed} align='center'>{items}</div>;
    }

    render() {
        return (
            <div>
                {this.loadItems()}
            </div>
        );
    }
}

export default PostList;
