import React, { useState, useEffect } from 'react';
import Question from './Question'
import Answer from './Answer'
import CardNav from './CardNav'
import { motion } from 'framer-motion'
import Hint from './Hint'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'
import Checkmark from './Checkmark';

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

const Card = ({ card, index, prevIndex, mode, back, next, goTo, cardCount }) => {
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
        <motion.div className='inner-card'>
          <span className='question-number'>{index + 1}.</span>
          <Question question={card.question} />
          <Answer answer={card.answer} mode={mode} setAnswered={setAnswered} setCorrect={setCorrect} id={card.id} />
          <div className='hint-container'>
            <FontAwesomeIcon onClick={() => setHintVisible(!hintVisible)} className='fontawesome-lightbulb' icon={faLightbulb} size='2x' />
            <Hint hint={card.hint} open={hintVisible} />
          </div>
        </motion.div>
        <CardNav back={back} next={next} cardCount={cardCount} goTo={goTo} prevIndex={prevIndex} index={index} setDirection={setDirection} />
        {answered && <Checkmark correct={correct} />}
      </motion.div>
  )
}

export default Card