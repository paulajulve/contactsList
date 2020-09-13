import React, {useState, useEffect, Component} from 'react'
import axios from 'axios'
import Contact from "./Contact";
import {Link} from "react-router-dom";

const Contacts = () => {
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        axios.get('/api/v1/contacts.json')
            .then( resp => {
                setContacts(resp.data)
            })
            .catch( resp => console.log(resp) )
    }, [contacts.length])

    const deleteContact = (e) => {
        axios.delete(`/api/v1/contacts/${e}`)
            .then(resp => {
                setContacts(contacts.filter((contact) => contact.id !== e))
            })
            .catch(resp => {})
    }

    const list = contacts.map( (contact, index) => {
        return (
            <Contact
                key={index}
                id={contact.id}
                first_name={contact.first_name}
                last_name={contact.last_name}
                handleDelete={deleteContact}
            />
        )
    })

    return (
        <div>
            <div>
                <h1>Contacts list :)</h1>
            </div>

            <div>
                {list}
            </div>

            <div>
                <Link to={`/create`}>Create a new contact</Link>
            </div>
        </div>
    )
}

export default Contacts
