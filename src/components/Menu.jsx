import { React, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'


const menuVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 0,
        x: '200px',
        transition: {
            type: 'spring',
            stiffness: 175,
            damping: 25,
        }
    },
    open: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'spring',
            stiffness: 175,
            damping: 25,
        }
    }
}

const Menu = ({ logoutUser, open, setOpen }) => {
    const ref = useRef()

    const handleClick = (e) => {
        if (ref.current.contains(e.target)) {
            return 
        }
        setOpen()
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClick)

        return () => {
            document.removeEventListener('mousedown', handleClick)
        }
    }, [])

    return (
        <motion.div ref={ref} className='menu-container' layout>
            <motion.div
                className='menu'
                variants={menuVariants}
                initial='hidden'
                animate={open ? 'open' : 'visible'}
                layout
            >   
                <Link to='/' className='fontawesome-home'>
                    <FontAwesomeIcon icon={faHouseUser} />
                    <span style={{padding: '1rem'}}>Home</span>
                </Link>
                <div style={{marginTop: '2rem'}} className='fontawesome-logout' onClick={logoutUser}>
                    <FontAwesomeIcon icon={faSignOutAlt} />
                    <span style={{padding: '1rem'}}>Logout</span>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default Menu