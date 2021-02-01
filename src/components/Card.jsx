import React from 'react';
import Question from './Question'
import Answer from './Answer'
import StyledCard from '../styledComponents/StyledCard'
import { motion, AnimatePresence } from 'framer-motion'

const Card = ({ question, answer, index, mode, next, back }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key={index}
        initial={{ x: '100vw', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{duration: .6, ease: 'easeInOut'}}
        exit={{ x: '-100vw', opacity: 0.5 }}
      >
        <StyledCard>
          <span className='question-number'><strong>{index + 1}.</strong></span>
          <Question question={question} />
          <Answer answer={answer} />
          <button className='back-button' onClick={back}>Back</button>
          <button className='next-button' onClick={next}>Next</button>
        </StyledCard>
      </motion.div>
    </AnimatePresence>
  )
}

export default Card