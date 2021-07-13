import React, { useState, useEffect } from 'react';
import CardContainer from '../containers/CardContainer'
import ModeSelect from '../components/ModeSelect'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getDeck } from '../actions/deckActions'
import { startSession } from '../actions/sessionActions'

const Deck = () => {
  const [mode, setMode] = useState(null)
  const [index, setIndex] = useState(0)
  const [prevIndex, setPrevIndex] = useState(null)
  const deck = useSelector(state => state.deckReducer.deck)
  const params = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getDeck(params.id))
  }, [dispatch, params.id])

  const handleClick = (e) => {
    e.preventDefault()
    setMode(e.target.innerHTML)
    dispatch(startSession(deck))
  }

  const next = () => {
    if (index < deck.cards.length - 1) {
      setPrevIndex(index)
      setIndex(index + 1) 
    }
  }

  const back = () => {
    if (index > 0) {
      setPrevIndex(index)
      setIndex(index - 1) 
    }
  }

  const goTo = (x) => {
    setPrevIndex(index)
    setIndex(x - 1)
  }

  return (
    <div className="deck-display">
      {deck && <div className='deck-title'>
        <h1>{deck.name}</h1>
        <p style={{fontFamily: 'Montserrat', paddingLeft: '8px', color: 'lightsalmon'}}>({deck.cards.length} Cards)</p>
      </div>}

      {!mode && <ModeSelect handleClick={handleClick} />}

      {mode && <CardContainer 
        card={deck.cards[index]} 
        index={index}
        prevIndex={prevIndex}
        mode={mode} 
        next={next} 
        back={back} 
        goTo={goTo}
        cardCount={deck.cards.length} 
      />}
    </div>
  )
}

export default Deck