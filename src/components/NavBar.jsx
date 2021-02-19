import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseUser } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
  return (
    <div className='NavBar'>
      <div className='app-title'>
        <h1 className='title'>FLASHCARDS</h1>
      </div>
      <div className='nav-links'>
        <Link to='/' className='link'>
          <FontAwesomeIcon icon={faHouseUser} size='2x' />
        </Link>
      </div>
    </div>
  )
}

export default NavBar