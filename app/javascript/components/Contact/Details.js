import React from 'react'

const Details = (props) => {
    return (
        <div className="wrapper">
            <div>{props.first_name}</div>
            <div>{props.last_name}</div>
            <div>{props.email}</div>
            <div>{props.phone}</div>
        </div>
    )
}

export default Details