import React from 'react'

export default function BookingConfirmation(props) {
    const { activity, booking, instructor, mail, payment, phone } = props.location.state
    console.log("hheheheh ", props.location.state)
    return (
        <div>
            <h3>Tack för din bokning.</h3>
            
        </div>
    )
}
