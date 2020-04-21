
 
 import React from 'react'
 import './newsitem.css'
 import { Typography, Slider } from 'antd';
 const { Paragraph } = Typography;
 
 function NewsItem(props) {
 
     return (
         <div align = "center" >
             <div class="newsitem">
                 <h1>
                     {props.title}
                 </h1>
                 {props.images.map(image => <img class="newsimage" src={image} />)}
                 <p class="truncate">
                     {props.content}
                 </p>
                 <button class="read-more">
                     Läs mer
                 </button>
 
 
                 <h4>
                     Publicerad {props.date.toLocaleString()} av {props.author}
                 </h4>
             </div>
         </div >
 
         );
 
 }
 
 
 export default NewsItem
 
 
 