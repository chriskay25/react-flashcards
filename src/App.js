import React, { useEffect } from 'react'
import './App.css';
import NavBar from './components/NavBar'
import Deck from './components/Deck'
import Decks from './components/Decks'
import LandingPage from './components/LandingPage'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
import { Redirect, Route, Switch, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getCurrentUser } from './actions/userActions'
// import { AnimatePresence } from 'framer-motion'


const App = () => {
  const currentUser = useSelector(state => state.userReducer.currentUser)
  const dispatch = useDispatch()
  const location = useLocation()

  useEffect(() => {
    dispatch(getCurrentUser())
  }, [dispatch])

  return (
    <div className="App">
      <NavBar />
      {/* <AnimatePresence exitBeforeEnter> */}
        <Switch location={location} key={location.pathname}>
          <Route exact path='/decks/:id'>
            {currentUser ? <Deck /> : <Redirect to='/' />}
          </Route> 
          <Route exact path='/decks'>
            {currentUser ? <Decks /> : <Redirect to='/' />}
          </Route>
          <Route exact path='/login'>
            {currentUser ? <Redirect to='/decks' /> : <LoginForm />}
          </Route> 
          <Route exact path='/signup'>
            {currentUser ? <Redirect to='/decks' /> : <SignupForm />}
          </Route> 
          <Route exact path='/'>
            {currentUser ? <Redirect to='/decks' /> : <LandingPage />}
          </Route>
        </Switch>
      {/* </AnimatePresence> */}
    </div>
  );
}

export default App
