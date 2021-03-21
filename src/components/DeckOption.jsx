import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Redirect, useLocation } from 'react-router-dom'

const DeckOption = ({ deckId, deckName, index }) => {
    const optionVariants = {
        hidden: {
            marginTop: '.8rem',
            width: '40%',
            scaleX: 0,
            x: '100vw',
        },
        visible: {
            x: 0,
            padding: '1rem',
            scaleX: 1,
            backgroundColor: 'var(--dark)',
            color: 'var(--lightblue)',
            boxShadow: '0 0 0 0px var(--lightcoral)',
            transition: {
                type: 'spring',
                damping: 15,
                delay: index/8,
            }
        },
        hover: {
            boxShadow: '0 0 3px 2px var(--lightcoral)',
            originX: 0,
            width: '70%',
            color: 'var(--lightcoral)',
            transition: {
                type: 'spring',
                stiffness: 175,
            }
        },
        exit: { x: '-100vw' }
    }

    const [redirected, setRedirected] = useState(false)
    const location = useLocation()
    const locationState = JSON.stringify({ from: location })

    return (
        <motion.div className='deck-option' 
            initial='hidden' 
            animate='visible' 
            whileHover='hover' 
            exit='exit'
            variants={optionVariants}
            onClick={ () => setRedirected(!redirected) }
        >
            {redirected && <Redirect to={{ pathname: `/decks/${deckId}`, state: locationState }} />}
            <motion.h2 className='deck-option-name'>{deckName}</motion.h2>
        </motion.div>
    )
}

export default DeckOption