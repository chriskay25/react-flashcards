import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

class LandingPage extends Component {
    render() {
        return (
            <motion.div className='landing-page' animate={{opacity: 1}} transition={{delay: .5}}>
                <Link to='/login'>Log In</Link>
                <Link to='/signup'>Sign Up</Link>
            </motion.div>
        )
    }
}

export default LandingPage

