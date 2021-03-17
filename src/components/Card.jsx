import React, { useState, useEffect } from 'react';
import Question from './Question'
import Answer from './Answer'
import StyledCard from '../styledComponents/StyledCard'
import { motion, AnimatePresence } from 'framer-motion'

const Card = ({ question, answer, index, mode, next, back }) => {
  const [isCorrect, setIsCorrect] = useState(null)

  useEffect(() => {
    setIsCorrect(null)
  },[index])

  // const handleAnswerChange = (e) => {
  //   setUserAnswer(e.target.value)
  // }

  // const handleAnswerSubmit = (e) => {
  //   e.preventDefault()
  //   console.log('user answered: ', userAnswer)
  // }

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key={index}
        initial={{ x: '100vw', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{duration: .6, ease: 'easeInOut'}}
        exit={{ x: '-100vw', opacity: 0.5 }}
      >
        <StyledCard correct={isCorrect}>
          <span className='question-number'><strong>{index + 1}.</strong></span>
          <Question question={question} />
          <Answer answer={answer} mode={mode} setIsCorrect={setIsCorrect} /> 
        </StyledCard>
      </motion.div>
    </AnimatePresence>
  )
}

export default Card