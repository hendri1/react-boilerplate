import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AppRoutes } from 'routes'

const App = () => {
  return (
    <Router>
      <Switch>
        {AppRoutes.map(route => <Route key={route} {...route} />)}
      </Switch>
    </Router>
  )
}

export default App
