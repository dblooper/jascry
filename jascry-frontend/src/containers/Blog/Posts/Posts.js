import React, {useState} from 'react'
import classes from './Posts.module.css'
import Post from '../../../components/Blog/Post/Post'
import axios from 'axios'
import Spinner from '../../../components/Spinner/Spinner'
import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import PageControl from '../../../components/Blog/PageControl/PageControl'

const Posts = (props) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);
    let posts = [] 
    if(props.loadedPosts) {
        posts = props.loadedPosts.map((post) => {
            return(<Post
                key={post.postId} 
                id={post.postId}
                title={post.name}
                date={post.creationDate.slice(0,10)}
                body={post.body.slice(0,100)}
                likes={post.likes}
                comments={post.commentsForPostDto.length}
                click={props.clickPost}
            />)
        })
    } else {
        for(let i = 0; i < props.numberOfPosts; i++) {
            posts.push(<div key={i} style={{display: "block", width: "50px", margin: "auto"}}><Spinner/></div>) 
        }
    }
    return(
        <div className={classes.Posts}>
            <SectionTitle implementedClass="SectionTitle" header="Latest" />
            {posts}
            <PageControl currentPage={currentPage} lastPage={lastPage}/>
        </div>
    );
}

export default Posts;