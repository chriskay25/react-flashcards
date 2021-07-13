import React from 'react'
import Card from '../components/Card'
import { AnimatePresence } from 'framer-motion'

const CardContainer = ({ card, index, prevIndex, mode, next, back, goTo, cardCount }) => {

  return(
    <div className='card-container'>
      <AnimatePresence exitBeforeEnter>
        <Card
          card={card}
          key={card.id} 
          index={index}
          prevIndex={prevIndex}
          mode={mode} 
          back={back}
          next={next}
          goTo={goTo}
          cardCount={cardCount}
        />
      </AnimatePresence>
    </div>
  )
}

export default CardContainer