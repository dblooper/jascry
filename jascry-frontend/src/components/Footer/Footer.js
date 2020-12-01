import React from 'react';
import classes from './Footer.module.css';
import { faGithubSquare} from "@fortawesome/free-brands-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = (props) => {
    return(
        <footer className={classes.Footer}>
            <h1>Keep in contact</h1>
            <ul>
                <li><a href="https://www.facebook.com/daniel.koplenski/" target="blank"><FontAwesomeIcon icon={faFacebookSquare}/></a></li>
                <li><a href="https://www.facebook.com/daniel.koplenski/" target="blank"><FontAwesomeIcon icon={faFacebookMessenger}/></a></li>
                <li><a href="https://discord.com/channels/@jascry#0736"><FontAwesomeIcon icon={faDiscord}/></a></li>
                <li><a href="https://github.com/jascry" target='blank'><FontAwesomeIcon icon={faGithubSquare}/></a></li>
            </ul>
            <h1>&copy; jascry.com - Daniel Koplenski </h1>        
        </footer>
    );
}

export default Footer;