import React from 'react'

const EditForm = (props) => {
    return (
        <div className="wrapper">
            <form onSubmit={props.handleSubmit}>
                <div>Use this form to edit the details of this contact:</div>
                <div className="field">
                    <input onChange={props.handleChange} value={props.first_name} type="text" name="first_name" placeholder="First name"/>
                </div>
                <div className="field">
                    <input onChange={props.handleChange} value={props.last_name} type="text" name="last_name" placeholder="Last name"/>
                </div>
                <div className="field">
                    <input onChange={props.handleChange} value={props.email} type="text" name="email" placeholder="Email address"/>
                </div>
                <div className="field">
                    <input onChange={props.handleChange} value={props.phone} type="text" name="phone" placeholder="Phone number"/>
                </div>
                <button type="submit">Save</button>
            </form>
        </div>
    )
}

export default EditForm