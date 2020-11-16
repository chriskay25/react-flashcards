import React from 'react';

const Card = ({ question, answer }) => {
  return (
    <div className='Card'>
      <p>Question: {question}</p>
      <p>Answer: {answer}</p>
    </div>
  )
}

export default Card