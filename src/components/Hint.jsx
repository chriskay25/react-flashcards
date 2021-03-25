import React from 'react'

const Hint = ({ hint }) => {
    return (
        <div className='hint'>
            { hint ? hint : ''}
        </div>
    )
}

export default Hint