import React, { useState } from 'react'
import { BrowserRouter as Link } from "react-router-dom"
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import ConfirmDialogue from "./ConfirmDialogue"

class Contact extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            confirmOpen: false
        }

        this.handleDelete = this.handleDelete.bind(this)
        this.setOpen = this.setOpen.bind(this)
    }

    handleDelete() {
        this.props.handleDelete(this.props.id)
    }

    setOpen(e) {
        this.setState({ confirmOpen: e })
    }

    render() {
        return (
            <div className="card">
                <div className="contact-first-name">{this.props.first_name}</div>
                <div className="contact-last-name">{this.props.last_name}</div>

                <div className="contact-details-link">
                    <Link to={`/contacts/${this.props.id}`}>View details</Link>
                </div>

                <div>
                    <IconButton aria-label="delete" onClick={() => this.setState({ confirmOpen: true })}>
                        <DeleteIcon />
                    </IconButton>

                    <ConfirmDialogue
                        open={this.state.confirmOpen}
                        setOpen={this.setOpen}
                        onConfirm={this.handleDelete}
                    >
                        Are you sure you want to delete this contact?
                    </ConfirmDialogue>
                </div>
            </div>
        )
    }

}

export default Contact
