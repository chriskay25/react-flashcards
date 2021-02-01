import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Redirect } from 'react-router-dom'

const DeckOption = ({ deckId, deckName, index }) => {
    const optionVariants = {
        hidden: {
            scaleX: 0,
            y: '10vh',
        },
        visible: {
            scaleX: 1,
            y: 0,
            transition: {
                type: 'spring',
                damping: 15,
                delay: index/8,
            }
        },
        hover: {
            scale: .9,
            boxShadow: '0px 0px 10px #000',
            transition: {
                type: 'spring',
                bounce: .3
            }
        },
        exit: { x: '-100vw' }
    }

    const [redirected, setRedirected] = useState(false)
    const handleClick = () => {
        setRedirected(!redirected)
    }

    return (
        <motion.div className='deck-option' 
            initial='hidden' 
            animate='visible' 
            whileHover='hover' 
            exit={{ x: '-100vw' }}
            variants={optionVariants}
            onClick={handleClick}
        >
            {redirected && <Redirect to={`/decks/${deckId}`} />}
            <h2 style={{color: '#000'}} className='deck-option-name'>{deckName}</h2>
        </motion.div>
    )
}

export default DeckOption