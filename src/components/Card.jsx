import React from 'react';

const Card = ({ question, answer, number }) => {
  return (
    <div className='Card-display'>
      <p><strong>{number + 1}.</strong></p>
      <p><strong>Question:</strong> {question}</p>
      <p><strong>Answer:</strong> {answer}</p>
    </div>
  )
}

export default Card