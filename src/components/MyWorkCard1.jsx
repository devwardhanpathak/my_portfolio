import React, { useRef, useEffect } from 'react';
import MyWork from './MyWork';
import Carousel from 'react-bootstrap/Carousel';
import GitHubIcon from '@material-ui/icons/GitHub';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';
import MunimPic from './image/munim/login.PNG';
import munim1 from './image/munim/munim1.PNG';
import munim2 from './image/munim/munim2.PNG';
import munim3 from './image/munim/munim3.PNG';
import munim4 from './image/munim/munim4.PNG';
import munim5 from './image/munim/munim5.PNG';
import './css/mywork.css';


// bootstrap modal func
function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Carousel>
                <Carousel.Item>
                    <img className="modal-pic" alt="project-ss" src={munim1} />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="modal-pic" alt="project-ss" src={munim2} />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="modal-pic" alt="project-ss" src={munim3} />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="modal-pic" alt="project-ss" src={munim4} />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="modal-pic" alt="project-ss" src={munim5} />
                </Carousel.Item>
            </Carousel>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal >
    );
}



const MyWorkCard1 = () => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
            <img onClick={() => setModalShow(true)} className="project-image" alt="Project-ss" src={MunimPic} />
            <span className="carousel-details">
                <h1 className="carousel-heading">Munim</h1>
                <h4 className="project-head-details">An online web based inventory managment system</h4>
                <p className="project-details">I developed User Interface</p>
                <a href="https://github.com/devwardhanpathak" rel="noreferrer" target="_blank">
                    <GitHubIcon className="material-icon-carousel" />
                </a>
                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </span>
        </>
    );
};

export default MyWorkCard1;