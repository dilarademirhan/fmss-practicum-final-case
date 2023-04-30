import React, { useState } from 'react'
import './App.css'
import SearchStarship from './components/SearchStarship'
import StarshipDetail from './components/StarshipDetail'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

function App() {

  return (
    <>
    <h1 className='header'>Star Wars</h1>
      <Router>
        <Switch>
          <Route path="/details/:number">
            <StarshipDetail />
          </Route>
          <Route path="/">
            <SearchStarship />
          </Route>
        </Switch>
      </Router>
    </>
  )

}

export default App