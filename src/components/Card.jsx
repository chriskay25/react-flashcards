import React, { useState, useEffect } from 'react';
import Question from './Question'
import Answer from './Answer'
import StyledCard from '../styledComponents/StyledCard'
import CardNav from './CardNav'
import { motion } from 'framer-motion'
import Hint from './Hint'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'

const cardVariants = {
  enterRight: {
    opacity: 0,
    x: '60vw',
    scale: .4,
  },
  enterLeft: {
    opacity: 0,
    x: '-60vw',
    scale: .4,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  exitRight: {
    x: '60vw',
    opacity: .2,
    scale: 0,
  },
  exitLeft: {
    x: '-60vw',
    opacity: .2,
    scale: 0,
  }
}

const Card = ({ card, index, prevIndex, mode, back, next, cardCount }) => {
  const [correct, setCorrect] = useState(null)
  const [answered, setAnswered] = useState(false)
  const [hintVisible, setHintVisible] = useState(false)
  const [direction, setDirection] = useState('forward')

  return (
      <motion.div
        className='card'
        key={index}
        variants={cardVariants}
        initial={index > prevIndex ? 'enterRight' : 'enterLeft'}
        animate='visible'
        transition={{type: 'spring', stiffness: 175, damping: 25}}
        exit={direction === 'forward' ? 'exitLeft' : 'exitRight'}
      >
        <StyledCard correct={correct}>
          <span className='question-number' style={{fontFamily: 'Bungee', color: 'var(--red'}}><strong>{index + 1}.</strong></span>
          <Question question={card.question} />
          <Answer answer={card.answer} mode={mode} setIsCorrect={setCorrect} /> 
          <div className='hint-container'>
            <FontAwesomeIcon onClick={() => setHintVisible(!hintVisible)} className='fontawesome-lightbulb' icon={faLightbulb} size='2x' />
            <Hint hint={card.hint} open={hintVisible} />
          </div>
        </StyledCard>

        <CardNav back={back} next={next} cardCount={cardCount} setDirection={setDirection} />
      </motion.div>
  )
}

export default Card