import React, { useState } from 'react'
import Card from '../components/Card'

const CardContainer = ({ cards, mode }) => {

  const [index, setIndex] = useState(0)

  const studyMode = () => {
    return cards.map((card, idx) => {
      return <Card key={card.id} question={card.question} answer={card.answer} mode={mode} index={idx} />
    })
  }

  const quizMode = () => {
    const quizCard = cards[index]
    return <Card key={quizCard} question={quizCard.question} answer={quizCard.answer} mode={mode} index={index} />
  }

  const next = () => {
    if (index < cards.length - 1) {
      setIndex(index + 1) 
    }
  }

  const back = () => {
    if (index > 0) {
      setIndex(index - 1) 
    }
  }

  return(
    <div className='card-container'>
      {/* Mode: {mode} */}
      <div className='study-card-container'>
        {mode === 'Study' && studyMode()}
      </div>
      <div className='quiz-card-container'>
        {mode === 'Quiz' && quizMode()}
        <button className='back-button' onClick={back}>Back</button>
        <button className='next-button' onClick={next}>Next</button>
      </div>
    </div>
  )
}

export default CardContainer