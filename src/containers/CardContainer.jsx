import React from 'react'
import Card from '../components/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { AnimatePresence } from 'framer-motion'

const CardContainer = ({ card, index, mode, next, back, cardsInDeck }) => {

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
        <div style={{backgroundColor: 'var(--red)', color: 'var(--darker)', padding: '.5rem', borderRadius: '.5rem', textAlign: 'center'}}>
          <h4>Card Number</h4>
          <div style={{margin: '.6rem 0', fontSize: '1.9rem', fontWeight: '600'}}>
            <input className='card-nav-input'></input>
            <span> / {cardsInDeck}</span>
          </div>
          <button style={{ display: 'inline-block', backgroundColor: 'var(--dark', color: 'var(--light'}} onHover={{color: 'white'}}>Go</button>
        </div>
        <button className='nav-button next-button' onClick={next}><FontAwesomeIcon icon={faArrowRight} size='3x' /></button>
      </div>
    </div>
  )
}

export default CardContainer