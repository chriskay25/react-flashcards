import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import DeckOption from './DeckOption'
import { getDecks } from '../actions/deckActions'
import { useSelector, useDispatch } from 'react-redux'

const Decks = () => {

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

    const decks = useSelector(state => state.deckReducer.decks)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getDecks())
    }, [dispatch])

    const populate = () => {
        return decks.map((deck, idx) => {
            return (
                <motion.div 
                    className='deck-option-container' 
                    key={deck.id} 
                    variants={optionVariants} 
                    custom={idx} 
                    initial='hidden' 
                    animate='visible'
                    layout
                >
                    <DeckOption deck={deck} />
                </motion.div>
            )
        })
    }

    return (
        <div className='decks-container'>
            <div className='decks-header'>
                <h2>Decks</h2>
            </div>
            <div className='deck-options-container'>
                {populate()}
            </div>
        </div>
    )
}
  
export default Decks