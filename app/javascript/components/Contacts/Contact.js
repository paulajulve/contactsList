import React from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";

const Contact = (props) => {
    return (
        <div className="card">
            <div className="contact-first-name">{props.first_name}</div>
            <div className="contact-last-name">{props.last_name}</div>
            <div className="contact-details-link">
                <Link to={`/contacts/${props.id}`}>View details</Link>
            </div>
        </div>
    )
}

export default Contact