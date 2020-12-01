import React, {Component} from 'react'
import classes from './Timeline.module.css'
import SectionTitle from '../../../components/SectionTitle/SectionTitle'

class Timeline extends Component {
    render() {
        return(
            <div className={classes.Timeline}>
                <SectionTitle implementedClass="TimelineTitle" header="Archive"/>
                <ul>
                    <li>Hello World</li>
                    <li>Hello World</li>
                    <li>Hello World</li>
                    <li>Hello World</li>
                    <li>Hello World</li>
                </ul>
            </div>
        );
    }
}

export default Timeline;