import React from 'react'
import PropTypes from 'prop-types';


const Button = ({ color, text, onClick }) => {
    return (
        <button onClick={onClick} style={{ backgroundColor : color }} className='btn'>
             {text}
        </button>
    )
}

   // set default props
   Button.defaultProps = {
    color : 'steelblue'
}

 // set validate prosp types 
 Button.propTypes = {   
    color : PropTypes.string.isRequired,
    text : PropTypes.string.isRequired,
    onClick : PropTypes.func.isRequired
}



export default Button
