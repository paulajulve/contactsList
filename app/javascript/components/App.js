import React from "react"
import { BrowserRouter as Switch, Route } from 'react-router-dom'
import Contacts from "./Contacts/Contacts"
import Create from "./Create/Create"
import Edit from "./Edit/Edit"

const App = () => {
    return (
        <Switch>
            <Route exact path="/" component={Contacts}/>
            <Route exact path="/create" component={Create} />
            <Route exact path="/edit/:id" component={Edit} />
        </Switch>
    )
}

export default App