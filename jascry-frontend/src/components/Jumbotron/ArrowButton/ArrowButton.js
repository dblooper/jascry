import React from 'react';
import classes from './ArrowButton.module.css';

const ArrowButton = (props) => {
    return(
        <div className={classes.Border}>
            <div className={[classes.Arrow, classes[props.color], classes[props.direction]].join(' ')} onClick={props.clicked}></div>
        </div>
    );
} 

export default ArrowButton;