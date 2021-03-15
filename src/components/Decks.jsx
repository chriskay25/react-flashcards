import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import DeckOption from './DeckOption'
import { getDecks } from '../actions/deckActions'
import { useSelector, useDispatch } from 'react-redux'

const Decks = () => {
    const decks = useSelector(state => state.deckReducer.decks)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getDecks())
        console.log('useEffect getDecks')
    }, [dispatch])

    const populate = () => {
        return decks.map((deck, idx) => {
            return <DeckOption key={deck.id} deckId={deck.id} index={idx + 1} deckName={deck.name} />
        })
    }

    return (
        <div className='decks-container'>
            <div className='decks-header'>
                <h2>Decks</h2>
            </div>
            <motion.div className='deck-options-container'>
                {populate()}
            </motion.div>
        </div>
    )
}
  
export default Decks