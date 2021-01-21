import React, { useState } from 'react'
import Card from '../components/Card'

const CardContainer = ({ cards, mode }) => {

  const [index, setIndex] = useState(0)

  const studyMode = () => {
    return cards.map((card) => {
      return <Card key={card.id} question={card.question} answer={card.answer} />
    })
  }

  const quizMode = () => {
    const quizCard = cards[index]
    return <Card key={quizCard} question={quizCard.question} answer={quizCard.answer} />
  }

  return(
    <div className='card-container'>
      Mode: {mode}
      <div>
        {mode === 'Study' && studyMode()}
      </div>
      <div>
        {mode === 'Quiz' && quizMode()}
      </div>
    </div>
  )
}

export default CardContainer