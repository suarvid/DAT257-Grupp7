import "./schema.css";
import React from 'react';
import schema from './schema.PNG';

function Schema(){
    return (
        <div className ="schema-container">
            <h3> Hela Åsas sommarSchema 2020</h3>
            <div className="schema-image">
                <img src={schema} alt="Nia Motion"width="100%" height="100%"/>
            </div>

            <div className= "schema-info">  
             <p> Förutom dessa upplevelser har vi stundtals speciella event. Har du önskemål eller vill veta mer tveka inte att höra av dig!</p>
                <p> Med Vänliga hälsningar </p>
                <p>Hela Åsa </p>   
            </div>
           
        </div>
    )
}
export default Schema

/*vet att det är lite fullösning med texten i schema-info, men fick inte <br> </br> att fungera
tänkte att det inte var såå viktigt!*/