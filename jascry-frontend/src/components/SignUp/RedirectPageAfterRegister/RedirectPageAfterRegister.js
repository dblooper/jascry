import React from 'react';
import classes from './RegisterPageAfterRegister.module.css';

const RedirectPageAfterRegister = () => {
    return(
        <div className={classes.RedirectPageAfterRegister}>
            <h1>Registration Succsessful! Welcome on board!</h1>
            <h2>Please verify your account via email and feel free to be a part of this site.</h2>
        </div>
    );
}

export default RedirectPageAfterRegister