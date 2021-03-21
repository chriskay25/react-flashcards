import { React } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'


const menuVariants = {
    hidden: {
        opacity: 0,
        height: '0px',
        originY: 0,
    },
    visible: {
        opacity: 1,
        height: '200px',
        borderRadius: '1rem',
    },
    closed: {
        opacity: 0,
        height: '0px',
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