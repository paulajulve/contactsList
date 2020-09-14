import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {Button, Container, Grid, List, ListItem} from "@material-ui/core";
import Contact from "./Contact"

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
            <ListItem key={index}>
                <Contact
                    id={contact.id}
                    first_name={contact.first_name}
                    last_name={contact.last_name}
                    email={contact.email}
                    phone={contact.phone}
                    handleDelete={deleteContact}
                />
            </ListItem>
        )
    })

    return (
        <Container>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <List>
                        {list}
                    </List>
                </Grid>

                <Grid item xs={12}>
                    <Button variant="contained" color="primary" component={Link} to={`/create`}>
                        Add contact
                    </Button>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Contacts
