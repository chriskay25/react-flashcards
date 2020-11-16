import React from 'react';
import Card from './Card'

const Deck = ({ name, cards }) => {
  return (
    <div className="Deck">
      <p><strong>DECK:</strong> {name}</p>
      <p>Cards in Deck: {cards.length}</p>
      <ul>
        {cards.map((card, index) => {
          return <Card key={card.id} number={index} question={card.question} answer={card.answer} />
        })}
      </ul>
    </div>
  )
}



export default Deck