import React from 'react'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { useDispatch } from 'react-redux'
import { userLogout } from '../actions/userActions'
import Menu from './Menu'

const navBarVariants = {
  hidden: {
    height: '25px',
  },
  visible: {
    height: [null, '50px'],
    justifyContent: 'center',
  },
  loggedIn: {
    height: '25px',
    justifyContent: 'flex-start',
    transition: {
      duration: 1,
      type: 'spring',
    }
  }
}

const titleVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    fontSize: '40px',
  },
  loggedIn: {
    fontSize: '20px',
    paddingLeft: '1rem',
    transition: {
      duration: .5,
    }
  }
}

const NavBar = () => {
  const currentUser = useSelector(state => state.userReducer.currentUser)
  const dispatch = useDispatch()

  const logoutUser = () => {
    dispatch(userLogout())
  }

  return (
    <motion.div className='NavBar' layout initial='hidden' animate={currentUser ? 'loggedIn' : 'visible'} variants={navBarVariants}>
      
      <motion.div layout className='app-title' initial='hidden' animate={currentUser ? 'loggedIn' : 'visible'} variants={titleVariants}>
        <div className='title'>FLASHCARDS</div>
      </motion.div>

      {currentUser && <Menu logoutUser={logoutUser} />}
    
    </motion.div>
  )
}

export default NavBar