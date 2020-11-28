import React from 'react';
import Question from './Question'
import Answer from './Answer'
import { motion } from 'framer-motion'

const Card = ({ question, answer, number }) => {
  return (
    <motion.div className='Card-display' animate={{ scale: .95 }} transition={{ duration: 1 }}>
      <p><strong>{number + 1}.</strong></p>
      <Question question={question} />
      <Answer answer={answer} />
    </motion.div>
  )
}

export default Card