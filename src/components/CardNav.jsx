import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const CardNav = ({ back, next, cardCount, setDirection }) => {

    const handleNext = () => {
        setDirection('forward')
        next()
    }

    const handleBack = () => {
        setDirection('backward')
        back()
    }

    return (
        <div className='navigation-buttons'>
            <button className='nav-button back-button' onClick={handleBack}><FontAwesomeIcon icon={faArrowLeft} size='3x' /></button>
            <div style={{color: 'var(--darker)', padding: '.5rem', borderRadius: '.5rem', textAlign: 'center'}}>
                <h4>Card Number</h4>
                <div style={{margin: '.6rem 0', fontSize: '1.9rem', fontWeight: '600'}}>
                    <input className='card-nav-input'></input>
                    <span> / {cardCount}</span>
                    <button style={{ marginLeft: '1rem', backgroundColor: 'var(--dark)', color: 'var(--light'}}>Go</button>
                </div>
            </div>
            <button className='nav-button next-button' onClick={handleNext}><FontAwesomeIcon icon={faArrowRight} size='3x' /></button>
        </div>
    )
}

export default CardNav