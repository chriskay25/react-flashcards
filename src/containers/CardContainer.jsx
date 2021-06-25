import React from 'react'
import Card from '../components/Card'
// import CardNav from '../components/CardNav'
import { AnimatePresence } from 'framer-motion'

const CardContainer = ({ card, index, prevIndex, mode, next, back, cardCount }) => {

  return(
    <div className='card-container'>
      <div className='inner-card-container'>
        <AnimatePresence exitBeforeEnter>
          <Card
            card={card}
            key={card.id} 
            index={index}
            prevIndex={prevIndex}
            mode={mode} 
            back={back}
            next={next}
            cardCount={cardCount}
          />
        </AnimatePresence>
      </div>
      {/* <CardNav back={back} next={next} cardCount={cardCount} setDirection={setDirection} /> */}
    </div>
  )
}

export default CardContainer