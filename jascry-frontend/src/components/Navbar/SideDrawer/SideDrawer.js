import React from 'react'
import classes from './SideDrawer.module.css'
import Logo from '../Logo/Logo'
import NavbarItems from '../NavbarItems/NavbarItems'
import Aux from '../../../hoc/Aux/Aux'
import BackDrop from '../../BackDrop/BackDrop'
import Footer from '../../Footer/Footer'

const SideDrawer = (props) => {
    let attachedStyles = [classes.SideDrawer, classes.Close]
    if(props.open) {
        attachedStyles = [classes.SideDrawer, classes.Open]
    }
    return(
        <Aux>
            <BackDrop show={props.open} clicked={props.closed}/>
            <div className={attachedStyles.join(' ')}> 
                <div className={classes.Logo}>
                    <Logo change={props.open}/>
                </div>
                <nav>
                    <NavbarItems />
                </nav>
                <footer className={classes.Footer}>
                    <Footer />
                </footer>
            </div>
        </Aux>
    );
}

export default SideDrawer;