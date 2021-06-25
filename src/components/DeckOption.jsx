import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Redirect, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const DeckOption = ({ deck }) => {
    const optionVariants = {
        hidden: {
        },
        visible: {
            width: '50%',
            color: 'var(--lightblue)',
            boxShadow: '0 0 0 0px var(--lightcoral)',
        },
        open: {
            width: '100%',
            color: 'var(--lightcoral)',
            boxShadow: '0 0 3px 2px var(--lightcoral)',
            transition: {
                type: 'spring',
                stiffness: 175,
                damping: 25,
            }
        },
        exit: { x: '-100vw' }
    }

    const [redirected, setRedirected] = useState(false)
    const [open, setOpen] = useState(false)
    const location = useLocation()
    const locationState = JSON.stringify({ from: location })

    return (
        <motion.div className='deck-option' 
            initial='hidden' 
            animate={open ? 'open' : 'visible'}
            exit='exit'
            variants={optionVariants}
            onClick={ () => setOpen(!open) }
        >
            {redirected && <Redirect to={{ pathname: `/decks/${deck.id}`, state: locationState }} />}
            <h2 className='deck-option-name'>{deck.name}</h2>
            {open && <div>{deck.cards.length} Cards</div>}
            {open && 
                <motion.button 
                    className='deck-option-bttn' 
                    animate={{opacity: 1}} 
                    transition={{delay: .4}}
                    onClick={ () => setRedirected(!redirected) }
                >
                    <FontAwesomeIcon icon={faArrowRight} size={'2x'} />
                </motion.button>
            }
        </motion.div>
    )
}

export default DeckOption