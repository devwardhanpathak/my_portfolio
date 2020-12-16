import React, { useRef, useEffect } from 'react';
import Header from './Header.jsx';
import Carousel from 'react-bootstrap/Carousel';
import GitHubIcon from '@material-ui/icons/GitHub';
import Footer from './Footer.jsx';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';
import MunimPic from './image/munim/login.PNG';
import munim1 from './image/munim/munim1.PNG';
import munim2 from './image/munim/munim2.PNG';
import munim3 from './image/munim/munim3.PNG';
import munim4 from './image/munim/munim4.PNG';
import { TweenMax, Power3 } from 'gsap';
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
            </Carousel>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal >
    );
}


const MyWork = () => {

    const [modalShow, setModalShow] = React.useState(false);

    let myWork = useRef(null);
    let sliderTitle = useRef(null);
    let carouseldetails = useRef(null);
    let carouselimage = useRef(null);
    useEffect(() => {
        TweenMax.to(
            myWork,
            1.2,
            {
                opacity: 1,
                y: 0,
                ease: Power3.easeIn
            })
        TweenMax.to(
            sliderTitle,
            1.2,
            {
                opacity: 1,
                y: 0,
                ease: Power3.easeIn
            })
        TweenMax.from(
            carouseldetails,
            1.6,
            {
                opacity: 0,
                y: 250,
                ease: Power3.easeIn
            })
        TweenMax.from(
            carouselimage,
            1.6,
            {
                opacity: 0,
                y: -250,
                ease: Power3.easeIn
            })
    }, []);
    return (
        <>
            <div className="my-work-main">
                <Header />
                <h1 ref={titlele => { sliderTitle = titlele }} className="slider-title">Projects</h1>
                <div ref={el => { myWork = el }} className="carousel-div">
                    <Carousel>
                        <Carousel.Item>
                            <img ref={imagel => { carouselimage = imagel }} onClick={() => setModalShow(true)} className="project-image" alt="Project-ss" src={MunimPic} />
                            <span ref={detailsel => { carouseldetails = detailsel }} className="carousel-details">
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
                        </Carousel.Item>
                    </Carousel>
                </div>
                <Footer />
            </div>
        </>
    );
};
export default MyWork;