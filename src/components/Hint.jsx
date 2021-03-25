import React from 'react'
import { motion } from 'framer-motion'

const hintVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
}

const Hint = ({ hint, open }) => {
    return (
        <motion.div className='hint' initial='hidden' animate={ open ? 'visible' : 'hidden' } variants={hintVariants}>
            HINT: { hint ? hint : ''}
        </motion.div>
    )
}

export default Hint