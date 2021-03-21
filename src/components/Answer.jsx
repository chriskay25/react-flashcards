import React, { useState } from 'react'
import { motion } from 'framer-motion'

const answerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
}

const Answer = ({ answer, mode, setIsCorrect }) => {
  const [userAnswer, setUserAnswer] = useState('')
  const [disabled, setDisabled] = useState(false)

  const handleAnswerChange = (e) => {
    setUserAnswer(e.target.value)
  }

  const handleAnswerSubmit = (e) => {
    answer === userAnswer ? setIsCorrect(true) : setIsCorrect(false)
    setDisabled(true)
  }

  return (
    <motion.div className='answer' variants={answerVariants} initial='hidden' animate='visible'>
      {mode === 'Quiz' ? <input type='text' value={userAnswer} onChange={handleAnswerChange} placeholder='Answer'></input> : answer}
      <button className='answer-submit' onClick={handleAnswerSubmit} disabled={disabled}>Submit</button>
    </motion.div>
  )
}

export default Answer