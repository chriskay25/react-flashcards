import React from 'react'
import Card from '../components/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { AnimatePresence } from 'framer-motion'

const CardContainer = ({ card, index, mode, next, back }) => {

  return(
    <div className='card-container'>
      <div className='inner-card-container'>
        <AnimatePresence exitBeforeEnter>
          {mode === 'Study' && 
            <Card
              card={card}
              key={card.id} 
              index={index}
              mode={mode} />
          }
          {mode === 'Quiz' &&
            <Card 
            card={card}
            key={card.id} 
            index={index}
            mode={mode} />
          }
        </AnimatePresence>
      </div>

      <div className='navigation-buttons'>
        <button className='nav-button back-button' onClick={back}><FontAwesomeIcon icon={faArrowLeft} size='3x' /></button>
        <button className='nav-button next-button' onClick={next}><FontAwesomeIcon icon={faArrowRight} size='3x' /></button>
      </div>
    </div>
  )
}

export default CardContainer