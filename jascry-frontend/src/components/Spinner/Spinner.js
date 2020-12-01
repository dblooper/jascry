import React from 'react'
import classes from './Spinner.module.css'

const Spinner = (porps) => {
    return(
        <div className={classes.Circle}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
         </div>
    );
}

export default Spinner;