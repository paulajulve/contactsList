import React from 'react'
import {Button, Container, Grid, Input} from "@material-ui/core"
import {Link} from "react-router-dom";

const ContactForm = (props) => {
    return (
        <Container>
            <form onSubmit={props.handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Input onChange={props.handleChange} value={props.first_name} type="text" name="first_name" placeholder="First name"/>
                    </Grid>
                    <Grid item xs={12}>
                        <Input onChange={props.handleChange} value={props.last_name} type="text" name="last_name" placeholder="Last name"/>
                    </Grid>
                    <Grid item xs={12}>
                        <Input onChange={props.handleChange} value={props.email} type="text" name="email" placeholder="Email address"/>
                    </Grid>
                    <Grid item xs={12}>
                        <Input onChange={props.handleChange} value={props.phone} type="text" name="phone" placeholder="Phone number"/>
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            color="secondary"
                            size="large"
                            component={Link}
                            to={`/`}
                        >
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            size="large"
                        >
                            Save
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    )
}

export default ContactForm