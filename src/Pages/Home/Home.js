import React from 'react'
import BaseRouter from '../../routes.js'
import NewsItem from '../../Components/NewsItem'

function Home() {
    let images = ["/static/media/hundens_pose.289acd70.jpg","/static/media/hundens_pose.289acd70.jpg"]
    return (
        <div>
            <BaseRouter />
            <NewsItem
            classname = "news-item" 
            title = {"Title"} 
            images = {images}
            content = {"Detta är en temporär text som skulle kunna vara något mycket roligare än detta. Påsken är över och påskyogan är därmed också slut. Ha det fint i framtiden, peace out batik och bandanas!"}
                        date = { new Date()}
            author = "mig"
            />

        </div>
    )
}

export default Home
