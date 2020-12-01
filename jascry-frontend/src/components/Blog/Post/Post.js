import React from 'react';
import classes from './Post.module.css';

const Post = (props)=> {
    return (
        <div className={classes.Post} onClick={() => props.click(props.id)}>
            <div className={classes.TextData}>
                <h2>{props.title}</h2>
                <h3>{props.date}</h3>
                <h4>{props.body}</h4>
            </div>
            {/* <ul className={classes.VoteData}>
                <li>Likes: {props.likes}</li>
                <li>Dislikes: {props.dislikes}</li>
                <li>Comments: {props.comments}</li>
            </ul> */}
        </div>
    )
}

export default Post;