import React from 'react';
import Card from './Card'

const Deck = ({ name, cards }) => {
  return (
    <div className="Deck">
      <p>Name: {name}</p>
      <ul>
        {cards.map(card => {
          return <Card key={card.id} question={card.question} answer={card.answer} />
        })}
      </ul>
    </div>
  )
}



export default Deck