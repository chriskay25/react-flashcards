import React, { useState } from 'react';
import { motion, AnimateSharedLayout } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const ModeSelect = ({ handleModeSelect }) => {
    const [selected, setSelected] = useState(null)
    const modes = ['quiz', 'study']

    return (
        <div className='mode-select-container'>
            <h2>Select Mode</h2>
            <div className='mode-select'>

                <AnimateSharedLayout>
                    {modes.map((mode) => (
                        <motion.span className={`motion-option ${selected === mode && "selected"}`}
                            key={mode} 
                            onClick={() => setSelected(mode)}
                            layout
                        >
                            {selected === mode && (
                                <motion.span
                                    className='underline'
                                    layoutId='underline'
                                />
                            )}
                            {mode}
                        </motion.span>
                    ))}
                </AnimateSharedLayout>
            </div>
            <div className='confirm-mode'>
                {selected && <button onClick={() => handleModeSelect(selected)}>{<FontAwesomeIcon icon={faArrowRight} size={'2x'} />}</button>}
            </div>
        </div>
    )
}

export default ModeSelect