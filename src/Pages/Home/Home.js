import React from 'react'
import BaseRouter from '../../routes.js'
import PostListView from './PostListView';
function Home() {
    let images = ["/static/media/hundens_pose.289acd70.jpg","/static/media/hundens_pose.289acd70.jpg"]
    return (
        <div>
            <PostListView />
        </div>
    )
}

export default Home
