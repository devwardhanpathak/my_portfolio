import React from 'react';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';
import '@animxyz/core';
import './css/footer.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import DetailsIcon from '@material-ui/icons/Details';

// bootstrap modal func
function MyVerticallyCenteredModal(props) {
    return (
        <div className="contact-details-modal">
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <div className="contact-modal-container" xyz="fade-100 duration-10 stagger-5 ease-linear delay-4">
                    <h1 className="contact-modal-details xyz-in">Email: devwardhanpathak@gmail.com</h1>
                    <h1 className="contact-modal-details xyz-in">Phone: +91-8964900938</h1>
                </div>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal >
        </div>
    );
}



const Footer = () => {
    const [modalShow, setModalShow] = React.useState(false);
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
                        <DetailsIcon onClick={() => setModalShow(true)} className="material-icon" />
                    </li>
                </ul>
                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </div>
        </>
    );
};
export default Footer;