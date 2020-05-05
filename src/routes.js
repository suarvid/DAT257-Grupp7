import React from 'react'
import { Route } from 'react-router-dom'

import PostList from './Pages/Home/PostListView'
import PostDetail from './Pages/Home/PostDetailView'
import BookingConfirmation from './Pages/BookingConfirmation/BookingConfirmation'

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={PostList} />
        <Route  exact path='/post/:postID/' component={PostDetail} />
        <Route  exact path='/BookingConfirmation' component={BookingConfirmation} />
    </div>
);

export default BaseRouter;
