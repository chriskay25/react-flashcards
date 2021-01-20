import './App.css';
import NavBar from './components/NavBar'
import Home from './components/Home'
import Deck from './components/Deck'
import { Route, Switch } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/deck/:id' component={Deck} />
        <Route exact path='/deck' component={Deck} />
      </Switch>
        
    </div>
  );
}

export default App;
