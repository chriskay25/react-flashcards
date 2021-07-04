import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { useDispatch } from 'react-redux'
import { userLogout } from '../actions/userActions'
import Menu from './Menu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

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
    justifyContent: 'space-between',
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
    transition: {
      duration: .5,
    }
  }
}

const NavBar = () => {
  const currentUser = useSelector(state => state.userReducer.currentUser)
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)

  const handleMenuClick = () => {
      if (!open) setOpen(true)
  }

  const logoutUser = () => {
    dispatch(userLogout())
  }

  return (
    <motion.div className='NavBar' layout initial='hidden' animate={currentUser ? 'loggedIn' : 'visible'} variants={navBarVariants}>
      
      <motion.div layout className='app-title' initial='hidden' animate={currentUser ? 'loggedIn' : 'visible'} variants={titleVariants}>
        <div className='title'>FLASHCARDS</div>
      </motion.div>

      {currentUser && 
        <div className='menu-button' onClick={handleMenuClick}>
          <div className='fontawesome-menu-button'>
            {open ? <FontAwesomeIcon icon={faTimes} size='2x' /> : <FontAwesomeIcon icon={faBars} size='2x' />}
          </div>
        </div>
      }

      <Menu logoutUser={logoutUser} open={open} setOpen={setOpen} />
     
    </motion.div>
  )
}

export default NavBar