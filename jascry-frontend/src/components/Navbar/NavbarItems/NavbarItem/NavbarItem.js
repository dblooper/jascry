import React from 'react';
import {NavLink} from 'react-router-dom'
import classes from './NavbarItem.module.css'

const NavbarItem = (props) => {
        let classesAppended;
        if(props.additionalClasses) {
            classesAppended = [classes.NavbarItem, classes[props.additionalClasses]].join(' ');
        } else {
            classesAppended = classes.NavbarItem;
        }
        return(
        <NavLink 
            className={classesAppended}
            to={props.link}
            exact={props.exact}
            activeClassName={classes.active}>{ props.children }
        </NavLink>
        )
    }

export default NavbarItem;