import React, { Component, useState } from 'react';
import CardContainer from '../containers/CardContainer'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'

const buttonVariants = {
  hidden: {
    opacity: 0,
    x: '100vw'
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: .3,
      type: 'spring'
    }
  },
  whileHover: {
    scale: .9,
  }
}

const Deck = () => {
    const [mode, setMode] = useState(null)
    const deck = useSelector(state => state.deckReducer.deck)

  const handleClick = (e) => {
    e.preventDefault()
    setMode(e.target.innerHTML)
  }

    return (
      <div className="deck-display">
        {deck && <div className='deck-title'>
          <h2>{deck.name}</h2>
          <p>- {deck.cards.length} Cards</p>
          
        </div>}

        {!mode && <span className='mode-select'>
          <motion.button onClick={handleClick} variants={buttonVariants} initial='hidden' animate='visible' whileHover='whileHover' whileTap='whileTap'>Study</motion.button> 
          <motion.button onClick={handleClick} variants={buttonVariants} initial='hidden' animate='visible' whileHover='whileHover'>Quiz</motion.button> 
        </span>}

        {mode && <CardContainer cards={deck.cards} mode={mode} />}
      </div>
    )
}



export default Deck