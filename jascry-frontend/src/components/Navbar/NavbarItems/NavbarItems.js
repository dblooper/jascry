import React from 'react';
import classes from './NavbarItems.module.css'
import NavbarItem from './NavbarItem/NavbarItem'
import classItem from './NavbarItem/NavbarItem.module.css'
import { Link } from 'react-scroll';

const NavbarItems=() =>  {
        return(
            <ul className={classes.NavbarItems}>
                <NavbarItem link="/blog" exact>Blog</NavbarItem>
                <NavbarItem link="/about" exact>About</NavbarItem>
                <div className={[classItem.NavbarItem, classes.MobileHide].join(' ')}>
                <Link to="footer" smooth={true} spy={true} duration={800}>Contact</Link>
                </div>
                
                {/* <div className={classes.Auth}>
                    <NavbarItem link="/signup" additionalClasses="SignUp" exact>Sign Up</NavbarItem>
                    <NavbarItem link="/login" additionalClasses="SignUp" exact>Login</NavbarItem>
                </div> */}
            </ul>
        )
}
export default NavbarItems;