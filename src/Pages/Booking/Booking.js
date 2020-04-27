import React from 'react'
import FooterComponent from '../../Components/FooterComponent/FooterComponent'
import '../../Footer.css'

function Booking() {
    return (
        <div>
            <div className="container">
                <h1>Bokningssidan</h1>
                <p>det här är juttekuul :) mega kul :D  ändring 2</p>
                
                <h2>Erikas rubrik </h2>
                <p> Testtesttest</p>
                <p> Om du vill boka ett pass tryck *här*</p>
            </div>
            <div className="footer">
                <FooterComponent/>
             </div>   
         </div>

    )
}

export default Booking