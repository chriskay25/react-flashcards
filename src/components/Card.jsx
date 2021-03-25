import React, { useState, useEffect } from 'react';
import Question from './Question'
import Answer from './Answer'
import StyledCard from '../styledComponents/StyledCard'
import { motion } from 'framer-motion'
import Hint from './Hint'
import Checkmark from './Checkmark'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'

const Card = ({ card, index, mode }) => {
  const [isCorrect, setIsCorrect] = useState(null)

  return (
      <motion.div
        className='card'
        key={index}
        initial={{ x: '100vw', opacity: 0, scale: .2 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{duration: .6, ease: 'easeInOut'}}
        exit={{ x: '-100vw', opacity: 0.5, scale: .2 }}
      >
        <StyledCard correct={isCorrect}>
          <span className='question-number' style={{fontFamily: 'Bungee', color: 'var(--red'}}><strong>{index + 1}.</strong></span>
          <Question question={card.question} />
          <Answer answer={card.answer} mode={mode} setIsCorrect={setIsCorrect} /> 
          <div className='hint-container'>
            <FontAwesomeIcon className='fontawesome-lightbulb' icon={faLightbulb} size='2x' />
            <Hint hint={card.hint} />
          </div>
          <motion.div className='checkmark-div' initial={{scaleY: 0}} animate={{scaleY: 1}}>
            {isCorrect && <Checkmark />}
          </motion.div>
        </StyledCard>
      </motion.div>
  )
}

export default Card