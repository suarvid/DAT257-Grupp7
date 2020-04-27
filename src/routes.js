import React from 'react'
import { Route } from 'react-router-dom'

import PostList from './Pages/Home/PostListView'
import PostDetail from './Pages/Home/PostDetailView'

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={PostList} />
        <Route  exact path='/post/:postID/' component={PostDetail} />

    </div>
);

export default BaseRouter;
