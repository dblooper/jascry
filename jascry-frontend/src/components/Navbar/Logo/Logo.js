import React from 'react';
import classes from './Logo.module.css'
import {NavLink} from 'react-router-dom'

const Logo = (props) => (

    <div className={props.change ? [classes.LogoChange,classes.Logo].join(' ') : classes.Logo}>
        <NavLink to="/" exact>
            <div >
                <p className={classes.Nick}>
                    <span className={classes.LogoBracket}>(</span>dblooper<span className={classes.LogoBracket}>)</span>
                </p>
                <p className={classes.Name}>
                    Daniel Koplenski
                </p>
            </div>
        </NavLink>
    </div>

);
export default Logo;