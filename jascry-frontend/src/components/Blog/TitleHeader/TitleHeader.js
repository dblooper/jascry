import React from 'react';
import classes from './TitleHeader.module.css'
import { faJava, faJs, faPython} from "@fortawesome/free-brands-svg-icons";
import {faDatabase} from '@fortawesome/free-solid-svg-icons/faDatabase'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const TitleHeader = (props) => {
    const icon = (title) => {
        switch(title.toLowerCase()) {
            case 'java': return faJava;
            case 'javascript': return faJs;
            case 'python': return faPython;
            case 'sql i bzdetki': return faDatabase;
        }
    }
    return (
        <div style={{display: props.display}} className={[classes.TitleHeader, classes[props.additionalClass]].join(' ')}>
            <FontAwesomeIcon icon={icon(props.title)}/>
            <h1>{props.title}</h1>
        </div>
    )
}

export default TitleHeader;