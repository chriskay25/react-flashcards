import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const CardNav = ({ back, next, goTo, cardCount, prevIndex, index, setDirection }) => {
    const [navIndex, setNavIndex] = useState(null)

    const handleNext = () => {
        setDirection('forward')
        next()
    }

    const handleBack = () => {
        setDirection('backward')
        back()
    }

    const handleNavInput = (e) => {
        setNavIndex(e.target.value)
    }

    const handleNavSubmit = () => {
        navIndex > prevIndex ? setDirection('forward') : setDirection('backward')
        goTo(navIndex)
    }

    return (
        <div className='navigation-buttons'>
            <button className='nav-button back-button' onClick={handleBack}><FontAwesomeIcon icon={faArrowLeft} size='3x' /></button>
            <div className='card-nav'>
                <h4>Card Number</h4>
                <div className='inner-card-nav'>
                    <input onChange={handleNavInput} className='card-nav-input'></input>
                    <span> / {cardCount}</span>
                    <button onClick={() => handleNavSubmit()} style={{ marginLeft: '1rem', backgroundColor: 'var(--dark)', color: 'var(--light'}}>Go</button>
                </div>
            </div>
            <button className='nav-button next-button' onClick={handleNext}><FontAwesomeIcon icon={faArrowRight} size='3x' /></button>
        </div>
    )
}

export default CardNav