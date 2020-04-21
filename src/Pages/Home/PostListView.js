import React from "react";
import NewsItem from '../../Components/NewsItem/NewsItem';
import styles from './PostListView.css'
class PostList extends React.Component {
    
    state = {
        posts: [
            {
                id: 1,
                title: 'Test1',
                content: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
                author: 'me',
                images: []
            },
            {
                id: 2,
                title: 'Test2',
                content: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
                author: 'you',
                images: []
            },
            {
                id: 3,
                title: 'Test3',
                content: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
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
                <h1>Nyheter</h1>
                {this.loadItems()}
            </div>
        );
    }
}

export default PostList;
