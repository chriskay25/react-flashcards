import React, { useState } from 'react';
import Question from './Question'
import Answer from './Answer'
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

const Card = ({ card, index, mode, direction }) => {
  const [hintVisible, setHintVisible] = useState(false)

  return (
      <motion.div className='card' style={{overflow: 'hidden'}}>
        <motion.div className='inner-card' 
            key={index}
            variants={cardVariants}
            initial={direction === 'forward' ? 'enterRight' : 'enterLeft'}
            animate='visible'
            transition={{type: 'spring', stiffness: 175, damping: 25}}
            exit={direction === 'forward' ? 'exitLeft' : 'exitRight'}
        >
          <span className='question-number'>{index + 1}.</span>
          <Question question={card.question} />
          <Answer answer={card.answer} answered={card.answered} mode={mode} id={card.id} />
          <FontAwesomeIcon onClick={() => setHintVisible(!hintVisible)} className='fontawesome-lightbulb' icon={faLightbulb} size='2x' />
          {hintVisible && <Hint hint={card.hint} open={hintVisible} />}
        </motion.div>
        {/* {answered && <Checkmark correct={correct} />} */}
      </motion.div>
  )
}

export default Card