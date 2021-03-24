import React, { useState, useEffect } from 'react';
import Question from './Question'
import Answer from './Answer'
import StyledCard from '../styledComponents/StyledCard'
import { motion } from 'framer-motion'
import Checkmark from './Checkmark'

const Card = ({ card, index, mode }) => {
  const [isCorrect, setIsCorrect] = useState(null)

  return (
      <motion.div
        className='card'
        key={index}
        initial={{ x: '100vw', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{duration: .6, ease: 'easeInOut'}}
        exit={{ x: '-100vw', opacity: 0.5 }}
      >
        <StyledCard correct={isCorrect}>
          <span className='question-number'><strong>{index + 1}.</strong></span>
          <Question question={card.question} />
          <Answer answer={card.answer} mode={mode} setIsCorrect={setIsCorrect} /> 
          <motion.div className='checkmark-div' initial={{scaleY: 0}} animate={{scaleY: 1}}>
            {isCorrect && <Checkmark />}
          </motion.div>
        </StyledCard>
      </motion.div>
  )
}

export default Card