import React, {Component} from 'react';
import classes from  './Navbar.module.css'
import NavbarItems from '../../components/Navbar/NavbarItems/NavbarItems'
import Logo from '../../components/Navbar/Logo/Logo'
import DrawerToggler from '../../components/Navbar/SideDrawer/DrawerToggler/DrawerToggler';

class Navbar extends Component {
    state = {
        classesAppended: [classes.Navbar]
    }

    componentDidMount = function () {
        window.addEventListener('scroll', this.changeClass);
    }
    componentWillUnmoount = function () {
        window.onscroll = () => {
                window.removeEventListener('scroll', this.changeClass);
        }
        
    } 

    changeClass = () => {
        if(window.pageYOffset === 0) {
            if(this.state.classesAppended !== classes.Navbar) {
                this.setState({classesAppended: [classes.Navbar]})
            }
        } else if(window.pageYOffset > 70) {
            this.setState(
                {classesAppended: [classes.Navbar, classes.AppendShadow]}
            );
        }
    }
    render() {
        return(
        <header className={this.state.classesAppended.join(' ')}>
            <DrawerToggler clicked={this.props.drawerTogglerClicked} />
            <div className={this.props.drawerToggleStatus ? classes.HideLogo: classes.Logo }>
                <Logo />
            </div>
            <nav className={classes.Desktop}>
                <NavbarItems></NavbarItems>
            </nav>
        </header>
    );
    }
};

export default Navbar;