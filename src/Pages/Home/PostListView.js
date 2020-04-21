import React from "react";
import NewsItem from '../../Components/NewsItem/NewsItem';
import styles from './PostListView.css'
class PostList extends React.Component {
    
    state = {
        posts: [
            {
                id: 1,
                title: 'Test1',
                content: 'Content1',
                author: 'me',
                images: []
            },
            {
                id: 2,
                title: 'Test2',
                content: 'Content2',
                author: 'you',
                images: []
            },
            {
                id: 3,
                title: 'Test3',
                content: 'Content3',
                author: 'unknown',
                images: []
            }
        ]
    };
    
    loadItems = () => {
        let items = [];
        for (let i = 0; i < this.state.posts.length; i++) {
            items.push(<NewsItem data={this.state.posts[i]}/>)
            items.push(<br />)
        }
        return <div className = {styles.itemFeed} align='center'>{items}</div>;
    }

    render() {
        return (
            <div>
                <h1>PostListView</h1>
                {this.loadItems()}
            </div>
        );
    }
}

export default PostList;
