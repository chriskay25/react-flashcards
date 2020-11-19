import React, { useState } from 'react';
import Button from '@material-ui/core/Button'
import StyledButton from './StyledButton'

export default function DeckSelect(props) {
  const [deck, setDeck] = useState(null);

  const handleChange = (event) => {
    props.fetchDeck(event.target.value);
  };

  const deckOptions = () => {
    return props.decks.map(deck => {
      return <option value={deck.id}>{deck.attributes.name}</option>
    })
  }

  return (
    <select onChange={handleChange} value={deck}>
      {!deck && (
        <option>Choose a Deck</option>
      )}
      {deckOptions()}
    </select>
  )
  
}