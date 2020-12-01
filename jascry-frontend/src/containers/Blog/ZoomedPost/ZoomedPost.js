import React, {useState, useEffect} from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import classes from './ZoomedPost.module.css';
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Parser from 'html-react-parser'
import TitleHeader from '../../../components/Blog/TitleHeader/TitleHeader';

const ZoomedPost = (props) => {
    const [hiddenComments, setHiddenComments] = useState(true);
    const [post, setPost] = useState(props.post);

    useEffect(() => {
        setPost(props.post)
        console.log(props.post)
    }, [props.post])
    return(
            <div className={classes.ZoomedPost}>
                <SectionTitle implementedClass="BlogTitle"  header={post ? post.name : ""}></SectionTitle>
                <div className={classes.Date}>
                    <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
                    <p>{post.creationDate ? post.creationDate.slice(0,10) : ""}</p>
                </div>
                <TitleHeader additionalClass='Small' title={post.subjectName}></TitleHeader>
                <hr></hr>
                <div className={classes.Content}>
                {Parser(post.body)}
                </div>
            </div>
        );
}

export default ZoomedPost;