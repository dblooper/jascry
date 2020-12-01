import React from 'react';
import classes from './JumbotronContent.module.css';

const JumbotronContent=(props) => {
    return(
        <div className={classes.JumbotronContent}>
             <h1>{props.header}</h1>
             <h2>{props.underHeader}</h2>
             <hr/>
             <p>{props.shortDescription}</p>
        </div>
    )
}

export default JumbotronContent