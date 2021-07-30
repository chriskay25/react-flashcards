import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const CardNav = ({ back, next, goTo, cardCount, index, setDirection, id }) => {
    const [navIndex, setNavIndex] = useState(null)

    const handleDirection = (dir) => {
        setNavIndex(null)
        setDirection(dir)
    }

    const handleNext = () => {
        next()
    }

    const handleBack = () => {
        back()
    }

    const handleNavInput = (e) => {
        setNavIndex(e.target.value)
        navIndex > index ? setDirection('forward') : setDirection('backward')
    }

    const handleNavSubmit = () => {
        // navIndex > index ? setDirection('forward') : setDirection('backward')
        navIndex && goTo(navIndex)
    }

    return (
        <div className='navigation-buttons'>
            <motion.button className='nav-button back-button' whileHover={() => handleDirection('backward')} onClick={handleBack}><FontAwesomeIcon icon={faArrowLeft} size='3x' /></motion.button>
            <div className='card-nav'>
                <h4>Card Number</h4>
                <div className='inner-card-nav'>
                    <input onChange={handleNavInput} className='card-nav-input'></input>
                    <span> / {cardCount}</span>
                    <button onClick={() => handleNavSubmit()} style={{ marginLeft: '1rem', backgroundColor: 'var(--dark)', color: 'var(--light'}}>Go</button>
                </div>
            </div>
            <motion.button className='nav-button next-button' whileHover={() => handleDirection('forward')} onClick={handleNext}><FontAwesomeIcon icon={faArrowRight} size='3x' /></motion.button>
        </div>
    )
}

export default CardNav