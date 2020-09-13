import React, { useState, useEffect } from 'react'
import axios from "axios";

const Create = () => {
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
                // TODO make the form a different view and redirect to contact show view on submit
            })
            .catch(resp => {})
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>Create a new contact:</div>
            <div className="field">
                <input onChange={handleChange} type="text" name="first_name" placeholder="First name"/>
            </div>
            <div className="field">
                <input onChange={handleChange} type="text" name="last_name" placeholder="Last name"/>
            </div>
            <div className="field">
                <input onChange={handleChange} type="text" name="email" placeholder="Email address"/>
            </div>
            <div className="field">
                <input onChange={handleChange} type="text" name="phone" placeholder="Phone number"/>
            </div>
            <button type="submit">Save</button>
        </form>
    )
}

export default Create