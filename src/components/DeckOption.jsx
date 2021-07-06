import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Redirect, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const optionVariants = {
    hidden: {
        opacity: 0,
        fontSize: '1rem',
    },
    visible: {
        opacity: 1,
        fontSize: '1rem',
        width: '70%',
        color: 'var(--lightblue)',
    },
    open: {
        opacity: 1,
        fontSize: '1.5rem',
        width: '100%',
        color: 'var(--lightcoral)',
        transition: {
            type: 'spring',
            stiffness: 175,
            damping: 25,
        }
    },
    exit: { x: '-100vw' }
}

const DeckOption = ({ deck, selected }) => {
    const [redirected, setRedirected] = useState(false)
    const location = useLocation()
    const locationState = JSON.stringify({ from: location })

    return (
        <motion.div className='deck-option' 
            initial='hidden'
            animate={selected ? 'open' : 'visible'}
            exit='exit'
            variants={optionVariants}
            layout
        >
            {selected && (
                <motion.div
                    className='outline'
                    layoutId='outline'
                    initial={false}
                    animate={{ borderColor: 'var(--light' }}
                    transition={{type: 'spring', stiffness: 500, damping: 30}}
                />
            )}

            {redirected && <Redirect to={{ pathname: `/decks/${deck.id}`, state: locationState }} />}
            
            <h2 className='deck-option-name'>{deck.name}</h2>
            
            {selected && <div>{deck.cards.length} Cards</div>}

            {selected && 
                <motion.button className='deck-option-bttn' 
                    animate={selected ? {opacity: 1} : {opacity: 0}}
                    onClick={ () => setRedirected(!redirected) }
                >
                    <FontAwesomeIcon icon={faArrowRight} size={'2x'} />
                </motion.button>
            }
        </motion.div>
    )
}

export default DeckOption