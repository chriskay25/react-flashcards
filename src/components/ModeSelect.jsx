import React from 'react';
import { motion } from 'framer-motion'

const modeSelectVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    scale: 1,
    opacity: 1, 
    transition: {
      delay: .3,
      type: 'spring',
      stiffness: 150,
    }
  },
  hover: {
    boxShadow: '0 0 0 4px var(--light)',
    backgroundColor: 'var(--dark)',
    color: 'var(--lightcoral)',
  },
  tap: {
    boxShadow: '0 0 0 4px var(--light)',
    backgroundColor: 'var(--dark)',
    color: 'var(--lightcoral)',
  }
}

const ModeSelect = ({ handleClick }) => {
    return (
        <span className='mode-select'>
            <h2>mode</h2>
            <motion.button onClick={handleClick} variants={modeSelectVariants} initial='hidden' animate='visible' whileHover='hover' whileTap='tap'>Study</motion.button> 
            <motion.button onClick={handleClick} variants={modeSelectVariants} initial='hidden' animate='visible' whileHover='hover' whileTap='tap'>Quiz</motion.button> 
        </span>
    )
}

export default ModeSelect