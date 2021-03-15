import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class LandingPage extends Component {
    render() {
        return (
            <div className='landing-page'>
                <Link to='/login'>Log In</Link>
                <Link to='/signup'>Sign Up</Link>
            </div>
        )
    }
}

export default LandingPage

