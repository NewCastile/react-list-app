import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import List from './components/List'
import Profile from './components/Profile'
import Form from './components/Form'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <List tweets="http://localhost:5000/tweets" type="feed"/>
        </Route>
        <Route path="/profiles/:user">
          <Profile />
        </Route>
        <Route path="/coment">
          <Form />
        </Route>
      </Switch>
    </Router>
  )
}

export { App }
