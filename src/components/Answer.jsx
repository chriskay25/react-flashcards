import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { questionAnswered } from '../actions/sessionActions'
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

const Answer = ({ answer, mode, setAnswered, setCorrect, id }) => {
  const [userAnswer, setUserAnswer] = useState('')
  const [disabled, setDisabled] = useState(false)
  const dispatch = useDispatch()

  const handleAnswerChange = (e) => {
    setUserAnswer(e.target.value)
  }

  const handleAnswerSubmit = (e) => {
    answer === userAnswer ? setCorrect(true) : setCorrect(false)
    setAnswered(true)
    setDisabled(true)
    dispatch(questionAnswered(id))
  }

  return (
    <motion.div className='answer' variants={answerVariants} initial='hidden' animate='visible'>
      {mode === 'Quiz' ? <TextareaAutosize value={userAnswer} onChange={handleAnswerChange} placeholder='Answer'></TextareaAutosize> : answer}
      <button className='answer-submit' onClick={handleAnswerSubmit} disabled={disabled}>Submit</button>
    </motion.div>
  )
}

export default Answer