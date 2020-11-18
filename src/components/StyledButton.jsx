import React from 'react'

const StyledButton = React.forwardRef((props, ref) => (
  <button ref={ref} className='StyledButton'>
    {props.children}
  </button>
))

export default StyledButton