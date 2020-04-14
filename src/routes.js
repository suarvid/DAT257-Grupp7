import React from 'react'
import { Route } from 'react-router-dom'

import Postlist from './Pages/Home/PostListView'

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={PostList} />
        <Route exact path='/:postID' component={Post}
    </div>
)
