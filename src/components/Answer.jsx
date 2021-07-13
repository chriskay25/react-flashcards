import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { TextareaAutosize } from '@material-ui/core'

const answerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
}

const Answer = ({ answer, mode, setAnswered, setCorrect }) => {
  const [userAnswer, setUserAnswer] = useState('')
  const [disabled, setDisabled] = useState(false)

  const handleAnswerChange = (e) => {
    setUserAnswer(e.target.value)
  }

  const handleAnswerSubmit = (e) => {
    answer === userAnswer ? setCorrect(true) : setCorrect(false)
    setAnswered(true)
    setDisabled(true)
  }

  return (
    <motion.div className='answer' variants={answerVariants} initial='hidden' animate='visible'>
      {mode === 'Quiz' ? <TextareaAutosize value={userAnswer} onChange={handleAnswerChange} placeholder='Answer'></TextareaAutosize> : answer}
      <button className='answer-submit' onClick={handleAnswerSubmit} disabled={disabled}>Submit</button>
    </motion.div>
  )
}

export default Answer