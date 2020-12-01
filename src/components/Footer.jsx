import React from 'react';
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
                    <li className="footer-li"><GitHubIcon className="material-icon" /></li>
                    <li className="footer-li"><LinkedInIcon className="material-icon" /></li>
                    <li className="footer-li"><TwitterIcon className="material-icon" /></li>
                    <li className="footer-li"><MailIcon className="material-icon" /></li>
                </ul>
            </div>
        </>
    );
};
export default Footer;