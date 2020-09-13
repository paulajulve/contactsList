import React, { useState, useEffect } from 'react'
import axios from "axios";
import EditForm from "./EditForm";
import Details from "./Details";

const Contact = (props) => {
    const [contact, setContact] = useState({})

    useEffect(() => {
        const id = props.match.params.id
        const url = `/api/v1/contacts/${id}`
        axios.get(url)
            .then( resp => setContact(resp.data) )
            .catch( resp => console.log(resp) )
    }, [])

    const handleChange = (e) => {
        // e.preventDefault()
        //
        // setContact(Object.assign({}, contact, {[e.target.name]: e.target.value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const contact_id = props.match.params.id
        axios.put(`/api/v1/contacts/${contact_id}`, {
            "first_name": contact.first_name,
            "last_name": contact.last_name,
            "email": contact.email,
            "phone": contact.phone
        })
            .then(resp => {
                // TODO make the form a different view and redirect to contact show view on submit
            })
            .catch(resp => {})
    }

    return (
        <div className="wrapper">
            <div className="column">
                <Details
                    first_name={contact.first_name}
                    last_name={contact.last_name}
                    email={contact.email}
                    phone={contact.phone}
                    />
            </div>
            <div className="column">
                <EditForm
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    first_name={contact.first_name}
                    last_name={contact.last_name}
                    email={contact.email}
                    phone={contact.phone}
                />
            </div>
        </div>
    )
}

export default Contact
