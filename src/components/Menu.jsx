import { React, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'


const menuVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 0,
        scaleY: 0,
    },
    open: {
        originY: '100px',
        opacity: 1,
        scaleY: 1,
    }
}

const Menu = ({ logoutUser }) => {
    const [open, setOpen] = useState(false)

    const handleMenuClick = () => {
        setOpen(!open)
    }

    return (
        <div className='menu-container'>
            <div className='menu-button'>
                <div className='fontawesome-bars' onClick={handleMenuClick}>
                    {open ? <FontAwesomeIcon icon={faTimes} size='2x' /> : <FontAwesomeIcon icon={faBars} size='2x' />}
                </div>
            </div>
            <motion.div
                className='menu'
                variants={menuVariants}
                initial='hidden'
                animate={open ? 'open' : 'visible'}
                layout
            >
                <Link to='/' className='fontawesome-home'>
                    <FontAwesomeIcon icon={faHouseUser} size='2x' />
                </Link>

                <div className='fontawesome-logout' onClick={logoutUser}>
                    <FontAwesomeIcon icon={faSignOutAlt} size='2x' />
                </div>
            </motion.div>
        </div>
    )
}

export default Menu