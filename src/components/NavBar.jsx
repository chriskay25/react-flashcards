import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='NavBar'>
      <div className='app-title'>
        <h1 className='title'>FLASHCARDS</h1>
      </div>
      <div className='nav-links'>
        <Link to='/' className='link'>Home</Link>
        <Link to='/deck' className='link'>Deck</Link>
      </div>
    </div>
  )
}

export default NavBar