import React, { useState, useEffect } from 'react';
import CardContainer from '../containers/CardContainer'
import ModeSelect from '../components/ModeSelect'
import CardNav from '../components/CardNav'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getDeck } from '../actions/deckActions'
import { startSession } from '../actions/sessionActions'

const Deck = () => {
  const [mode, setMode] = useState(null)
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState('forward')
  const deck = useSelector(state => state.deckReducer.deck)
  const session = useSelector(state => state.sessionReducer)
  const params = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getDeck(params.id))
  }, [dispatch, params.id])

  const handleModeSelect = (mode) => {
    setMode(mode)
    dispatch(startSession(deck))
  }

  const next = () => {
    if (index < session.cards.length - 1) {
      setIndex(index + 1) 
    }
  }

  const back = () => {
    if (index > 0) {
      setIndex(index - 1) 
    }
  }

  const goTo = (x) => {
    if (x > 0 && x < session.cards.length - 1) setIndex(x - 1)
  }

  return (
    <div className="deck-display">
      {deck && <div className='deck-title'>
        <h1>{deck.name}</h1>
        <p style={{fontFamily: 'Montserrat', paddingLeft: '8px', color: 'lightsalmon'}}>({deck.cards.length} Cards)</p>
      </div>}

      {!mode && <ModeSelect handleModeSelect={handleModeSelect} />}

      {mode && <CardContainer 
        card={session.cards[index]} 
        index={index}
        mode={mode} 
        cardCount={session.cards.length} 
        direction={direction}
      />}

      {mode && <CardNav 
            back={back} 
            next={next} 
            cardCount={session.cards.length} 
            goTo={goTo} 
            index={index} 
            id={session.cards[index].id}
            setDirection={setDirection}
        />}
    </div>
  )
}

export default Deck