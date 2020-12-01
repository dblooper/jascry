import React, { Component } from 'react'
import classes from './Projects.module.css'
import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import Project from '../../../components/MainSite/Projects/Project/Project'

class Projects extends Component {

    render() { 
        return (
            <div>
                <SectionTitle implementedClass="SectionTitle" header={this.props.header}/>
                <section className={classes.Projects}>
                    <Project title="GPSY" 
                            description="SPOTIFY client" 
                            technologies="Java"
                            />
                    <Project title="Monopoly Game Of Thrones" 
                            description="Desktop app" 
                            technologies="Java"
                            />
                </section>
                <h1>Go for more</h1>
            </div>
        );
    }
}

export default Projects