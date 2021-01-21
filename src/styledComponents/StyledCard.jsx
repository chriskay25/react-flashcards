import React from 'react'
import styled from 'styled-components'

const StyledCard = styled.div`
    width: 100%;
    padding: 15px;
    margin: ${props => (props.noMargin ? 0 : '0px')};
    box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 1);
    border-radius: 10px;
    background-color: lightgrey;
`
// width: ${props => (props.big ? '450px' : '300px')};
// transform: translateY(50px);
// transition: 500ms all ease-in-out;

export default StyledCard