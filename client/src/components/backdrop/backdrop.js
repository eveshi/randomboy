import React from 'react';
import classes from './backdrop.css'

const backdrop = (props) => {
    return <div className={classes.backdrop} 
        style={props.show?{display: "block"}:{display:"none"}}
        onClick={props.click}></div>
}

export default backdrop;