import React from "react"
import {shallow} from 'enzyme'
import Contacts from "../../../../app/javascript/components/Contacts/Contacts"
import {Button} from "@material-ui/core";

it("Renders the 'Add Contact' Button", () => {
    const contactsView = shallow(<Contacts/>)
    expect(contactsView.find(Button).length).toEqual(1)
})