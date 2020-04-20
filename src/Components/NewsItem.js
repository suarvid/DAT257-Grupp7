import React from '../../node_modules/react'
import './newsitem.css'


function NewsItem(prop) {
    return (<div align="center">
        <div class="newsitem">
            <h1>
                {prop.title}
            </h1>
            {prop.images.map(image => <img class="newsimage" src={image} />)}
            <p class>
            {prop.content}
            </p>
            <h4>
                Publicerad {prop.date.toLocaleString()} av {prop.author}
            </h4>
        </div>
    </div>
    )
}

export default NewsItem