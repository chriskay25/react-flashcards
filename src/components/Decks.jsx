import React, { useEffect, useState, useRef } from 'react'
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion'
import DeckOption from './DeckOption'
import { getDecks } from '../actions/deckActions'
import { useSelector, useDispatch } from 'react-redux'

const optionVariants = {
    hidden: {
        x: '100vw',
    },
    visible: i => ({
        x: 0,
        transition: {
            delay: i/4,
            type: 'spring',
            damping: 15,
        }
    }),
}

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
                console.log('ref inside: ', ref)
                return 
            }
            console.log('ref outside: ', ref)
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
                            layoutId={deck.id} 
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