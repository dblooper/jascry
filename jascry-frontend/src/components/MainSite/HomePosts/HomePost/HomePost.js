import React from 'react';
import classes from './HomePost.module.css'

const HomePost = (props) => {
    return (
        <div className={classes.HomePost} onClick={() => props.clicked(props.ind)}>
            <section>
                <h3>{props.title}</h3>
                <h4>{props.subject}</h4>
                <p>{props.description}</p>
                <div className={classes.PostDetails}>
                    {/* <p>Likes: {props.likes}</p>
                    <p>Comments: {props.commentsQty}</p> */}
                    <p>Date: {props.date}</p>
                </div>
            </section>
        </div>
    );
}

export default HomePost;