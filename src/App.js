import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Error from './Error'
import Dashboard from './Dashboard'
import Login from './Login'


function App() {
  return (
    <Router>
      <Switch>
      <Route exact path='/'>
      <Dashboard></Dashboard>
      </Route>
     <Route exact path ='/login'>
     <Login></Login>
</Route>
      <Route path ="*">
      <Error></Error>
      </Route>
      </Switch>
    </Router>
  )
}

export default App
