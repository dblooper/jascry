import React, { Component } from 'react'
import classes from './HomePosts.module.css'
import HomePost from '../../../components/MainSite/HomePosts/HomePost/HomePost'
import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import PostSelector from '../../../components/MainSite/HomePosts/PostSelector/PostSelector'
import Spinner from '../../../components/Spinner/Spinner'

class HomePosts extends Component {

    render() { 
        let HomePostsFetched = this.props.loadedLatestPosts.map(
            (post,i) => {
                return <HomePost key={i} 
                                ind={i}
                                title={ post.name } 
                                subject={ post.subjectName } 
                                author={ post.author } 
                                description={ post.body.slice(0,100) }
                                date={ post.creationDate.slice(0,10) }
                                likes={ post.likes }
                                commentsQty={ post.commentsForPostDto.length }
                                clicked={this.props.clicked}
                        />;
            }
        );

        if(!HomePostsFetched.length && !this.props.loadingPosts) {
            HomePostsFetched = <div className={classes.NoData}><h3>Posts for this topic not found yet</h3></div>
        } else if(this.props.loadingPosts) {
            for(let i = 1; i<= this.props.postsToFetch; i++) {
                HomePostsFetched.push(<Spinner key={'spinner' + 10 + i} />)
            }
            
        }
        return (
            <div>
                <SectionTitle implementedClass="SectionTitle" header={this.props.header}/>
                <PostSelector subjectHandler={this.props.subjectHandler} 
                                activeSubject={this.props.activeSubject} 
                                subjectList={this.props.subjectList}
                                styleApplied='MainSitePostSelector'
                                singleStyleApplied='Active'
                                />
                <section className={classes.HomePosts}>
                    { HomePostsFetched }
                </section>
                <h1>Go for more</h1>
            </div>
        );
    }
}

export default HomePosts