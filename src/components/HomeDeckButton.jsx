import React from 'react'
import { motion } from 'framer-motion'

const buttonVariants = {
    hidden: { 
        scale: 1.1, 
        borderRadius: '20%', 
        y: '10vh',
        boxShadow: '0px 0px 50px #000',
    },
    visible: {
        scale: 1,
        backgroundImage: 'radial-gradient(rgb(240,128,128), rgb(240,240,128))',
        boxShadow: '0px 0px 15px #000',
        transition: {
            delay: .3,
            type: 'spring', 
            stiffness: 100,
            damping: 14,
            mass: 5,
        }
    },
    hover: { 
        scale: 1.1,
        boxShadow: '0px 0px 35px #000',
        transition: { 
            type: 'spring',
            stiffness: 100,
            damping: 14,
            mass: 5,
        }
    },
    exit: {
        scale: 0,
        transition: { type: 'spring' }
    }
  }

const HomeDeckButton = () => (
    <motion.div className='home-deck-bttn'
        initial='hidden'
        animate='visible'
        whileHover='hover'
        exit='exit'
        variants={buttonVariants}
    >
        Decks
    </motion.div>
)

export default HomeDeckButton