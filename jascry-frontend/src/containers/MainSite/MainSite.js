import React, {Component} from 'react';
import classes from './MainSite.module.css';
import Subjects from './Subjects/Subjects'
import HomePosts from './HomePosts/HomePosts';
import axios from 'axios';
import Projects from './Projects/Projects';
import {Route, Switch} from 'react-router-dom';
import ZoomedPost from '../Blog/ZoomedPost/ZoomedPost';

class MainSite extends Component {
    state = {
        loadedSubjects: [],
        loadedLatestPosts: [],
        currentSubject: this.props.subject,
        currentPost: null,
        loadingSubjects: true,
        loadingPosts: true,
        numberOfPosts: 4,
    }

    componentDidMount() {
        //console.log(this.props);
        axios.get('http://localhost:8081/public/blog/subjects').then(
            response => {
                this.setState({loadedSubjects: response.data,
                                loadingSubjects: false});
                
            }
        ).catch(
            error => {
                console.log(error);
            }
        )
        axios.get('http://localhost:8081/public/blog/posts?subject=java&limit=' + this.state.numberOfPosts).then(
            response => {
                this.setState({loadedLatestPosts: response.data
                                ,loadingPosts: false});
                
            }
        ).catch(
            error => {
                console.log(error);
            }
        )
    }

    activeSubjectOnPostHandler = (subject) => {
        let currSubject = this.state.currentSubject;
        if(currSubject !== subject) {
            this.setState({
                currentSubject: subject
            })
            axios.get('http://localhost:8081/public/blog/posts?subject=' + subject + '&limit=' + this.state.numberOfPosts).then(
                response => {
                    this.setState({loadedLatestPosts: response.data});    
                }
            ).catch(
                error => {
                    console.log(error);
                }
            )
        }
    }
    clickLatestPostHandle = (index) => {
        let postToRender = this.state.loadedLatestPosts[index];
        this.setState({currentPost: postToRender});
        this.props.history.push('/post/' + postToRender.postId);
        console.log('Pushed!')
    }

    clickSubjectHandle = (subject) => {
        this.props.clicked(subject);
        this.props.history.push('/blog');
    }

    render() {
        return(
            <Switch> 
                <Route path={"/post/:id"} exact render={() => (<ZoomedPost post={this.state.currentPost ? this.state.currentPost : null} ></ZoomedPost>)}/>
                <div className={classes.MainSite}>
                    <Subjects header="Topics" 
                                loadedSubjects={this.state.loadedSubjects} 
                                loadingSubjects={this.state.loadingSubjects}
                                clicked={this.clickSubjectHandle}/>
                    <HomePosts header="Latest Posts" 
                                activeSubject={this.state.currentSubject}
                                subjectList={this.state.loadedSubjects}
                                loadedLatestPosts={this.state.loadedLatestPosts}
                                loadingPosts={this.state.loadingPosts}
                                subjectHandler={this.activeSubjectOnPostHandler}
                                postsToFetch = {this.state.numberOfPosts}
                                clicked={this.clickLatestPostHandle}
                                />;
                    <Projects header="My Projects" />
                </div>
            </Switch>
        );
    }
}

export default MainSite;