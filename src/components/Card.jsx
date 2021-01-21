import React from 'react';
import Question from './Question'
import Answer from './Answer'
import StyledCard from '../styledComponents/StyledCard'

const Card = ({ question, answer, index, mode, next, back }) => {
  return (
    <StyledCard>
      <p className='question-number'><strong>{index + 1}.</strong></p>
      <Question question={question} />
      <Answer answer={answer} />
      <button className='back-button' onClick={back}>Back</button>
      <button className='next-button' onClick={next}>Next</button>
    </StyledCard>
  )
}

export default Card