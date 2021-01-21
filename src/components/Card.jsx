import React from 'react';
import Question from './Question'
import Answer from './Answer'
import StyledCard from '../styledComponents/StyledCard'

const Card = ({ question, answer, index, mode }) => {
  return (
    <StyledCard>
      <p className='question-number'><strong>{index + 1}.</strong></p>
      <Question question={question} />
      <Answer answer={answer} />
    </StyledCard>
  )
}

export default Card