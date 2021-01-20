import React, { useState } from 'react';
import CardContainer from '../containers/CardContainer'
import { connect } from 'react-redux'

const Deck = ({ deck }) => {
  const [mode, setMode] = useState('')
  console.log('deck: ', deck)

  const handleClick = (e) => {
    console.log(e)
    setMode(e.target.innerHTML)
  }

  return (
    <div className="Deck-display">
      <h1>{deck.attributes.name}</h1>
      {!mode && <p className='mode-select'>
        Mode: 
        <button onClick={handleClick}>Study</button> 
        <button onClick={handleClick}>Quiz</button>
      </p>}
      <p>Cards in Deck: {deck.attributes.cards.length}</p>

      <CardContainer cards={deck.attributes.cards} mode={mode} />
    </div>
  )
}

const mapState = (state) => ({
  deck: state.deckReducer.deck,
})

export default connect(
  mapState
)(Deck)