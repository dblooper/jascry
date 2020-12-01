import React, { Component } from 'react';
import classes from  './Layout.module.css'
import Navbar from '../Navbar/Navbar'
import Jumbotron from '../Jumbotron/Jumbotron'
import Content from '../../components/Content/Content'
import SideDrawer from '../../components/Navbar/SideDrawer/SideDrawer';
import Footer from '../../components/Footer/Footer'
import {withRouter} from 'react-router-dom'

class Layout extends Component {
    state = {
        showSideDrawer: false,
    }

    showSideDrawerCloseHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer}
        });
    }

    render () {
        return(
            <div className={classes.Layout}>
                <Navbar drawerToggleStatus={this.state.showSideDrawer} drawerTogglerClicked = {this.sideDrawerToggleHandler}/>
                <SideDrawer 
                    open={this.state.showSideDrawer}
                    closed={this.showSideDrawerCloseHandler} />
                <Jumbotron hidden={!(this.props.location.pathname === '/')}/>
                <div className={ this.props.location.pathname === '/' ? classes.Content : [classes.Content, classes.SlideContent].join(' ')}>
                    <Content generatedContent={this.props.children}/>
                </div>
                <div id="footer"><Footer/></div>
                
            </div>
        );
    }

}

export default withRouter(props => <Layout {...props} />)
