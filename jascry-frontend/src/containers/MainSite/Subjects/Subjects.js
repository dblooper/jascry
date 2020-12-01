import React, { Component } from 'react'
import classes from './Subjects.module.css'
import Subject from '../../../components/MainSite/Subjects/Subject/Subject'
import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import Spinner from '../../../components/Spinner/Spinner'

class Subjects extends Component {
    state = {
        numberOfSpinners: 4
    }

    render() { 
        let subjectsFetched = this.props.loadedSubjects.map(
            subj => {
                return <Subject key={subj.subjectName} 
                                title={ subj.subjectName } 
                                description = { subj.description }
                                clicked={this.props.clicked}
                        />;
            }
        );
        if(!subjectsFetched.length) {
            for(let i=1 ; i <= this.state.numberOfSpinners; i++) {
                subjectsFetched.push(<Spinner key={"spinner" + i}/>)
            }
            
        }
        return (
            <div>
                <SectionTitle implementedClass="SectionTitle" header={this.props.header}/>
                <section className={[classes.Subjects, classes.Row].join(' ')}>
                    { subjectsFetched }
                </section>
            </div>
        );
    }
}

export default Subjects