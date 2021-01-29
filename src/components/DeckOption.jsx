import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link, Redirect } from 'react-router-dom'

const DeckOption = ({ deckId, deckName, index }) => {
    const optionVariants = {
        hidden: {
            scale: .5,
            x: '100vw',
        },
        visible: {
            scale: 1,
            backgroundColor: '#f08080',
            x: 0,
            borderRadius: '5%',
            transition: {
                type: 'spring',
                damping: 15,
                // mass: 6,
                delay: index/6,
            }
        },
        hover: {
            scale: .9,
            boxShadow: '0px 0px 10px #000',
            // backgroundColor: '#7FFFD4',
            // backgroundImage: 'radial-gradient(rgb(0,255,255), rgb(0,0,0))',
            transition: {
                type: 'spring',
                bounce: .6
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
            {/* <Link to={`/decks/${deckId}`}> */}
                <h2 style={{color: '#000'}} className='deck-option-name'>{deckName}</h2>
            {/* </Link> */}
        </motion.div>
    )
}

export default DeckOption