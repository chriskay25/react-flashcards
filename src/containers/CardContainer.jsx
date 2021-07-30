import React from 'react'
import Card from '../components/Card'
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion'

const CardContainer = ({ card, index, mode, direction }) => {

  return(
    <AnimateSharedLayout>
        <motion.div className='card-container' layout>
            <AnimatePresence exitBeforeEnter>
                <Card
                  card={card}
                  key={card.id}
                  index={index}
                  mode={mode} 
                  direction={direction}
                />
            </AnimatePresence>
        </motion.div>
    </AnimateSharedLayout>
  )
}

export default CardContainer