import React, { useEffect, useState, useRef } from 'react'
import { motion, AnimateSharedLayout } from 'framer-motion'
import DeckOption from './DeckOption'
import { getDecks } from '../actions/deckActions'
import { useSelector, useDispatch } from 'react-redux'

const Decks = () => {
    const ref = useRef()
    const decks = useSelector(state => state.deckReducer.decks)
    const dispatch = useDispatch()
    const [selectedId, setSelectedId] = useState(null)

    const handleClick = (id) => {
        selectedId === id ? setSelectedId(null) : setSelectedId(id)
    }

    useEffect(() => {
        dispatch(getDecks())

        const handleOutsideClick = (e) => {
            if (ref.current.contains(e.target)) {
                return 
            }
            setSelectedId(null)
        }

        document.addEventListener('mousedown', handleOutsideClick)

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick)
        }
    }, [dispatch])

    return (
        <div className='decks-container'>
            <h2 className='decks-header'>Decks</h2>
            <div ref={ref} className='deck-options-container'>
                <AnimateSharedLayout type='crossfade'>
                    {decks.map(deck => (
                        <motion.div 
                            className='deck-option-container' 
                            key={deck.id} 
                            onClick={() => handleClick(deck.id)}
                        >
                            <DeckOption deck={deck} selected={selectedId === deck.id} setSelectedId={setSelectedId} />
                        </motion.div>
                    ))}
                </AnimateSharedLayout>
            </div>
        </div>
    )
}
  
export default Decks