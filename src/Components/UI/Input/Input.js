import React from 'react'
import classes from './Input.modules.css'

const Input = React.forwardRef((props, ref) => {
    return <input className={classes.myInput} ref={ref} {...props} /> 
})

export default Input
