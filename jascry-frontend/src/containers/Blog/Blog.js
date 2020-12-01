import React, {Component} from 'react'
import classes from './Blog.module.css'
import Posts from './Posts/Posts';
import Timeline from './Timeline/Timeline';
import TitleHeader from '../../components/Blog/TitleHeader/TitleHeader'
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import {Route, Switch} from 'react-router-dom';
import PostSelector from '../../components/MainSite/HomePosts/PostSelector/PostSelector';
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import ZoomedPost from './ZoomedPost/ZoomedPost';

class Blog extends Component {
    state = {
        loadedSubjects: [],
        loadingSubjects: true,
        title: this.props.subject,
        numberOfPosts: 10,
        loadedPosts: null,
        postView: null
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

        const url = 'http://localhost:8081/public/blog/posts?subject=' + this.state.title + '&limit=' + this.state.numberOfPosts;
        axios.get(url)
                .then(
                    (response) => {
                        this.setState({loadedPosts: response.data})
                    }
                )
                .catch(
                    (error) => {
                        console.log(error)
                })
    }

    zoomPostHandler = (postId) => {
        const url = 'http://localhost:8081/public/blog/post?id=' + postId;
        axios.get(url)
                .then(
                    (response) => {
                        this.setState({postView: response.data});
                        this.props.history.push("blog/post/" + response.data.postId)
                        console.log(response.data)
                        console.log(this.state.postView)
                    }
                )
                .catch(
                    (error) => {
                        console.log(error)
                })
        this.forceUpdate();
    }

    postSubjectHandler = (subject) => {
        let currSubject = this.state.title;
        if(currSubject !== subject) {
            this.setState({
                title: subject
            });
            const url = 'http://localhost:8081/public/blog/posts?subject=' + subject + '&limit=' + this.state.numberOfPosts;
            axios.get(url).then(
                response => {
                    this.setState({loadedPosts: response.data});    
                }
            ).catch(
                error => {
                    console.log(error);
                }
            )
        }
    }
    render() {
        let fetchedSubjects = this.state.loadingSubjects ? [this.state.title] : this.state.loadedSubjects;
        console.log(this.props);
        return (
            <div className={classes.Blog}>
                <div style={{display: this.props.location.pathname.split('/').includes('post') ? 'none' : null}}>
                    <PostSelector 
                        subjectList={fetchedSubjects}
                        activeSubject={this.state.title}
                        styleApplied='BlogPostSelector'
                        singleStyleApplied='ActiveBlog'
                        subjectHandler={this.postSubjectHandler}
                    />
                </div>
                <TitleHeader display={this.props.location.pathname.split('/').includes('post') ? "none" : "" } title={this.state.title}/>
                <hr style={{color: 'black'}}></hr>
                <Switch>
                <Route path="/blog" exact render={() => {
                    return(
                        <div className={classes.BlogComponents}>
                            <Posts loadedPosts = {this.state.loadedPosts}
                                    numberOfPosts = {this.state.numberOfPosts}
                                    clickPost = {this.zoomPostHandler} />
                            <Timeline />
                        </div>)} } />
                        <Route path={"/blog/post/:id"} exact render={() => (<ZoomedPost post={this.state.postView ? this.state.postView : null} ></ZoomedPost>)}/>
                </Switch>
            </div>
        );
    }
}

// export default Blog
export default withRouter(props => <Blog {...props}/>);