import React from 'react';
import Question from './Question'
import Answer from './Answer'

const Card = ({ question, answer, number }) => {
  return (
    <div className='Card-display'>
      <p><strong>{number + 1}.</strong></p>
      <Question question={question} />
      <Answer answer={answer} />
    </div>
  )
}

export default Card