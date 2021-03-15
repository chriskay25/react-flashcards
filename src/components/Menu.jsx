import { React } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'


const menuVariants = {
    hidden: {
        y: 0,
        opacity: 0,
        scaleY: 0,
        originY: 0,
    },
    visible: {
        opacity: 1,
        scaleY: 1,
        borderRadius: '1rem',
        backgroundColor: 'var(--blue)',
        transition: {
            type: 'spring',
            damping: 10,
        }
    },
    closed: {
        opacity: 1,
        scaleY: 0,
    }
}

const Menu = ({ open, logoutUser }) => {

    return (
        <motion.div
            className='menu'
            variants={menuVariants}
            initial='hidden'
            animate={open ? 'visible' : 'closed'}
        >
            <Link to='/' className='fontawesome-home'>
                <FontAwesomeIcon icon={faHouseUser} size='2x' />
            </Link>
            
            <div className='fontawesome-logout' onClick={logoutUser}>
                <FontAwesomeIcon icon={faSignOutAlt} size='2x' />
            </div>
        </motion.div>
    )
}

export default Menu