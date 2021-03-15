import React, { useState } from 'react'
// import { Link, Redirect } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { useDispatch } from 'react-redux'
import { userLogout } from '../actions/userActions'
import Menu from './Menu'

const navBarVariants = {
  hidden: {
    height: '0px',
  },
  visible: {
    height: '5rem',
    // backgroundColor: 'var(--lightred)',
    justifyContent: 'center',
  },
  loggedIn: {
    height: '2.5rem',
    // backgroundColor: 'none',
    justifyContent: 'left',
  }
}

const titleVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    fontSize: '3rem',
  },
  loggedIn: {
    fontSize: '1.5rem',
  }
}

const NavBar = () => {
  const currentUser = useSelector(state => state.userReducer.currentUser)
  const dispatch = useDispatch()
  const [menuOpen, setMenuOpen] = useState(false)

  const logoutUser = () => {
    dispatch(userLogout())
  }

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <motion.div className='NavBar' initial='hidden' animate={currentUser ? 'loggedIn' : 'visible'} variants={navBarVariants}>
      <div className='app-title'>
        <motion.h1 className='title' initial='hidden' animate={currentUser ? 'loggedIn' : 'visible'} variants={titleVariants}>FLASHCARDS</motion.h1>
      </div>
      <div className='menu-container'>
        <div className='fontawesome-bars' onClick={handleMenuClick}>
          {menuOpen ? <FontAwesomeIcon icon={faTimes} size='2x' /> : <FontAwesomeIcon icon={faBars} size='2x' />}
        </div>
        <Menu open={menuOpen} logoutUser={logoutUser} />
      </div>
    </motion.div>
  )
}

export default NavBar