import React from "react";

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
            items.push(<h1>{this.state.posts[i].title}</h1>)
        }
        return items;
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
