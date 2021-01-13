import React, { useRef, useEffect } from 'react';
import { TweenMax, Power3 } from 'gsap';
import Carousel from 'react-bootstrap/Carousel';
import GitHubIcon from '@material-ui/icons/GitHub';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';
import RummyPic from './image/rummy/main.PNG';
import rummy1 from './image/rummy/rummy1.PNG';
import rummy2 from './image/rummy/rummy2.PNG';
import rummy3 from './image/rummy/rummy3.PNG';
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
                    <img className="modal-pic" alt="project-ss" src={rummy1} />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="modal-pic" alt="project-ss" src={rummy2} />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="modal-pic" alt="project-ss" src={rummy3} />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="modal-pic" alt="project-ss" src={RummyPic} />
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

    let carouseldetails = useRef(null);
    let carouselimage = useRef(null);

    return (
        <>
            <img ref={imagel => { carouselimage = imagel }} onClick={() => setModalShow(true)} className="project-image" alt="Project-ss" src={RummyPic} />
            <span ref={detailsel => { carouseldetails = detailsel }} className="carousel-details">
                <h1 className="carousel-heading">Rummy</h1>
                <h4 className="project-head-details">An online rummy game.</h4>
                <p className="project-details">I developed User Interface.</p>
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