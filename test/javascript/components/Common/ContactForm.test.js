import React from "react"
import {shallow} from 'enzyme'
import {Button, Input} from "@material-ui/core"

import ContactForm from "../../../../app/javascript/components/Common/ContactForm";

it("renders correctly", () => {
    const formView = shallow(<ContactForm/>)
    expect(formView.find(Input).length).toEqual(4)
    expect(formView.find(Button).length).toEqual(2)
})