import React from 'react'
import { motion } from 'framer-motion'
 
const checkmarkVariants = {
    hidden: {
        pathLength: 0,
        opacity: 0
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        transition: {
            duration: 1,
            ease: 'easeInOut',
            // delay: .5,
        }
    },
    exit: {pathLength: 0}
}

const Checkmark = () => {

    return (
        <motion.svg className='checkmark' 
            xlmns='http://www.w3.org/2000/svg' 
            viewBox='0 0 120 25'
        >
            <motion.path
                variants={checkmarkVariants}
                initial='hidden'
                animate='visible'
                exit='exit'
                // d="M 0 32 L 32 64 L 85 0"
                d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
                fill="transparent"
                strokeWidth="2"
                stroke='var(--lightblue)'
                strokeLinecap="round"
                strokeLinejoin="round"
            /> 
            <motion.polyline 
                fill='none' 
                stroke='var(--green)'
                strokeWidth='3'
                strokeLinecap="round"
                strokeLinejoin='round'
                initial={{opacity: 0, points: '10 10 10 10.01 10 10.01'}}
                animate={{opacity: 1, points: "22 4 12 15.01 9 9.01", transition: {delay: .8, duration: .8, ease: 'easeInOut'}}}
                exit={{points: '10 10 10 10 10 10'}}
            />
        </motion.svg>
    )
}

export default Checkmark