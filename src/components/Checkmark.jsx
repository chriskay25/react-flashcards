import React from 'react'
import { motion } from 'framer-motion'
 
const checkmarkVariants = {
    hidden: {
        pathLength: 0,
    },
    visible: {
        pathLength: 1,
        transition: {
            duration: 1.2,
            ease: 'easeInOut'
        }
    },
    exit: {pathLength: 0}
}

const Checkmark = () => {

    return (
        <motion.svg className='checkmark' 
            xlmns='http://www.w3.org/2000/svg' 
            viewBox='-20 -20 400 100'
            preserveAspectRatio="xMidYMid meet"
        >
            <motion.path
                variants={checkmarkVariants}
                initial='hidden'
                animate='visible'
                exit='exit'
                d="M 0 32 L 32 64 L 85 0"
                fill="transparent"
                strokeWidth="20"
                stroke='var(--lightgreen)'
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </motion.svg>
    )
}

export default Checkmark