import './App.css';
import NavBar from './components/NavBar'
import Home from './components/Home'
import Deck from './components/Deck'
import Decks from './components/Decks'
import { Route, Switch, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'


function App() {
  const location = useLocation()
  return (
    <div className="App">
      <NavBar />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path='/decks/:id' component={Deck} />
          <Route exact path='/decks' component={Decks} />
          <Route exact path='/' component={Home} />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
