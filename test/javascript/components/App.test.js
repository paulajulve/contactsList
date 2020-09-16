import React from "react"
import ReactDom from 'react-dom'
import App from "../../../app/javascript/components/App";

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDom.render(<App/>, div)
})