import React from 'react'
import ReactDOM from 'react-dom'
import Button from '@material-ui/core/Button'
import DeckSelect from './DeckSelect'
import DeckContainer from '../containers/DeckContainer'

const Home = () => {
  return (
    <div className='Homepage'>
      Welcome! Choose a deck to study.
      <DeckContainer />
    </div>
  )
}

export default Home