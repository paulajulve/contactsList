import React  from 'react'
import {Link} from "react-router-dom";
import {Accordion, AccordionSummary, AccordionActions, AccordionDetails, Grid, Divider, IconButton, Typography}
from '@material-ui/core'
import {Delete, Edit, Email, ExpandMore, Phone} from '@material-ui/icons'
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
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMore/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>
                        {`${this.props.first_name} ${this.props.last_name}`}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container spacing={3}>
                        <Grid item xs={2}><Email/></Grid>
                        <Grid item xs={10}>{this.props.email}</Grid>
                        <Grid item xs={2}><Phone/></Grid>
                        <Grid item xs={10}>{this.props.phone}</Grid>
                    </Grid>
                </AccordionDetails>
                <Divider/>
                <AccordionActions>
                    <IconButton aria-label="edit">
                        <Link to={`/contacts/${this.props.id}`}>
                            <Edit color="primary"/>
                        </Link>
                    </IconButton>
                    <IconButton aria-label="delete" onClick={() => this.setState({ confirmOpen: true })}>
                        <Delete color="secondary"/>
                    </IconButton>

                    <ConfirmDialogue
                        open={this.state.confirmOpen}
                        setOpen={this.setOpen}
                        onConfirm={this.handleDelete}
                    >
                        Are you sure you want to delete this contact?
                    </ConfirmDialogue>
                </AccordionActions>
            </Accordion>

        )
    }

}

export default Contact