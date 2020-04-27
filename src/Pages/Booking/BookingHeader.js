import React from "react";
import './Booking.css'
import '../../../src/globalstyles.css'

function BookingHeader(props) {

    return(
        <div className = 'header'>
            <h3 className = 'block'>Dag</h3>
            <h3 className = 'block'>Tid</h3>
            <h3 className = 'block'>Typ</h3>
            <h3 className = 'block'>Lokal</h3>
            <h3 className = 'block'>Instruktör</h3>

    </div>
    )

}


export default BookingHeader;
