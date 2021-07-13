import React from 'react'
import { motion } from 'framer-motion'

const circle = {
    hidden: {
        strokeDashoffset: 160,
        rotate: -90,
    },
    visible: {
        strokeDashoffset: 0,
        transition: {
            duration: .6,
            delay: .2,
            // ease: 'easeInOut',
        }
    }
}

const check = {
    hidden: {
        pathLength: 0,
        opacity: 0,
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        transition: {
            delay: .8,
            duration: .8,
            ease: 'easeInOut',
        }
    }
}

const Checkmark = ({ correct }) => {

    const checkPath = () => {
        return (
            <motion.path className="check" 
                d="M14.1 27.2l7.1 7.2 16.7-16.8" 
                initial='hidden' 
                animate='visible' 
                variants={check} 
            />
        )
    }

    const xPath = () => {
        return (
            <>
                <motion.path className="check" d="m 14 14 l 24 24" initial='hidden' animate='visible' variants={check} />
                <motion.path className="check" d="m 14 38 l 24 -24" initial='hidden' animate='visible' variants={check} />
            </>
        )
    }

    return (
        <div style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <svg className={correct ? 'checkmark correct' : 'checkmark incorrect'} viewBox="0 0 52 52">
                <motion.circle layout className="checkmark-circle" cx='26' cy='26' r='25' initial='hidden' animate='visible' variants={circle}/>
                {correct ? checkPath() : xPath()}
            </svg>
        </div>
    )
}

export default Checkmark