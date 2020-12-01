import React from 'react'
import classes from './Content.module.css'
import {withRouter} from 'react-router-dom'

const Content = (props) => {
    
    return(
        <div className={ props.location.pathname === '/' ? classes.Content : [classes.Content, classes.SlideContent].join(' ')}>
            {props.generatedContent}
        </div>
    )
};

export default withRouter(props => <Content {...props} />);