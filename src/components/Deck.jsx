import React, { useState, useEffect } from 'react';
import CardContainer from '../containers/CardContainer'
import ModeSelect from '../components/ModeSelect'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getDeck } from '../actions/deckActions'

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

const Deck = () => {
  const [mode, setMode] = useState(null)
  const [index, setIndex] = useState(0)
  const deck = useSelector(state => state.deckReducer.deck)
  const params = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getDeck(params.id))
  }, [dispatch, params.id])

  const handleClick = (e) => {
    e.preventDefault()
    setMode(e.target.innerHTML)
  }

  const next = () => {
    if (index < deck.cards.length - 1) {
      setIndex(index + 1) 
    }
  }

  const back = () => {
    if (index > 0) {
      setIndex(index - 1) 
    }
  }

  return (
    <div className="deck-display">
      {deck && <div className='deck-title'>
        <h1>{deck.name}</h1>
        <p style={{fontFamily: 'Montserrat', paddingLeft: '8px', color: 'lightsalmon'}}>({deck.cards.length} Cards)</p>
      </div>}

      {!mode && <ModeSelect handleClick={handleClick} />}

      {mode && <CardContainer card={deck.cards[index]} index={index} mode={mode} next={next} back={back} />}
    </div>
  )
}

export default Deck