import React, { useState } from 'react'
import axios from "axios";
import ContactForm from "../Common/ContactForm";

const Create = (props) => {
    const [contact, setContact] = useState({})

    const handleChange = (e) => {
        e.preventDefault()

        setContact(Object.assign({}, contact, {[e.target.name]: e.target.value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post(`/api/v1/contacts`, {
            "first_name": contact.first_name,
            "last_name": contact.last_name,
            "email": contact.email,
            "phone": contact.phone
        })
            .then(resp => {
                props.history.push('/')
            })
            .catch(resp => {})
    }

    return (
        <ContactForm
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            first_name={contact.first_name}
            last_name={contact.last_name}
            email={contact.email}
            phone={contact.phone}
        />
    )
}

export default Create