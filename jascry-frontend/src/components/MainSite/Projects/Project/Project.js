import React from 'react';
import classes from './Project.module.css'

const Project = (props) => {
    return (
        <div className={classes.Project}>
            <section>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <div className={classes.ProjectDetails}>
                    <p>Technologies: {props.technologies}</p>
                </div>
            </section>
        </div>
    );
}

export default Project;