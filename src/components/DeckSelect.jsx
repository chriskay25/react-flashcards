import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const DeckSelect = (props) => {
  const [deck, setDeck] = useState('')

  const handleChange = (event) => {
    setDeck(event.target.value)
    props.selectedDeck(event.target.value);
  };

  const deckOptions = () => {
    return props.decks.map(deck => {
      return <option key={deck.id} value={deck.id}>{deck.attributes.name}</option>
    })
  }

  return (
    <div>
      <select onChange={handleChange}>
        <option>Choose a Deck</option>
        {deckOptions()}
      </select>
      <Link to={'/deck/' + deck} className='go-to-deck'>Go!</Link>
    </div>
  )
}

export default DeckSelect