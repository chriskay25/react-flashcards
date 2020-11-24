import React from 'react';
// import StyledButton from './StyledButton'

const DeckSelect = (props) => {

  const handleChange = (event) => {
    console.log("Inside handleChange", event.target.value)
    props.singleDeck(event.target.value);
  };

  const deckOptions = () => {
    return props.decks.map(deck => {
      return <option key={deck.id} value={deck.id}>{deck.attributes.name}</option>
    })
  }

  return (
    <select onChange={handleChange}>
      <option>Choose a Deck</option>
      {deckOptions()}
    </select>
  )
}

export default DeckSelect