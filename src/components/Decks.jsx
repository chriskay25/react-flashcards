import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import DeckOption from './DeckOption'
import { getDecks } from '../actions/deckActions'
import { useSelector, useDispatch } from 'react-redux'


const containerVariants = {
    hidden: {
        scaleY: 0,
        borderTop: 'solid .2rem lightcoral', 
        borderBottom: 'solid .2rem lightcoral', 
    },
    visible: {
        scaleY: 1,
        borderTop: 'solid 1rem lightcoral', 
        borderBottom: 'solid 1rem lightcoral', 
        transition: {
            duration: 1,
        }
    },
    exit: {
        transition: {
            x: '-100vw',
            when: 'afterChildren',
        }
    }
}

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
        <>
            <h1 className='decks-header'>Decks</h1>
            <motion.div className='decks-motion'
                variants={containerVariants} 
                initial='hidden' 
                animate='visible'
                exit='exit'
            >
                {populate()}
            </motion.div>
        </>
    )
}
  
export default Decks