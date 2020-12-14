import React from 'react';
import { Link } from 'react-router-dom';
import './css/footer.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import MailIcon from '@material-ui/icons/Mail';

const Footer = () => {
    return (
        <>
            <div className="main-footer">
                <ul className="footer-icons">
                    <li className="footer-li">
                        <a href="https://github.com/devwardhanpathak" rel="noreferrer" target="_blank">
                            <GitHubIcon className="material-icon" />
                        </a>
                    </li>
                    <li className="footer-li">
                        <a href="https://www.linkedin.com/in/devwardhan-pathak-b680b1158/" rel="noreferrer" target="_blank">
                            <LinkedInIcon className="material-icon" />
                        </a>
                    </li>
                    <li className="footer-li">
                        <a href="https://twitter.com/DevwardhanP" rel="noreferrer" target="_blank">
                            <TwitterIcon className="material-icon" />
                        </a>
                    </li>
                    <li className="footer-li">
                        <Link to="/Contact">
                            <MailIcon className="material-icon" />
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
};
export default Footer;