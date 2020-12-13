import React, { useRef, useEffect } from 'react';
import Header from './Header.jsx';
import Carousel from 'react-bootstrap/Carousel';
import GitHubIcon from '@material-ui/icons/GitHub';
import Footer from './Footer.jsx';
import MunimPic from './image/login.PNG';
import { TweenMax, Power3 } from 'gsap';
import './css/mywork.css';

const MyWork = () => {
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
                            <img ref={imagel => { carouselimage = imagel }} className="project-image" src={MunimPic} />
                            <span ref={detailsel => { carouseldetails = detailsel }} className="carousel-details">
                                <h1 className="carousel-heading">Munim</h1>
                                <h4 className="project-head-details">An online web based inventory managment system</h4>
                                <p className="project-details">I developed User Interface</p>
                                <a href="https://github.com/devwardhanpathak" target="_blank">
                                    <GitHubIcon className="material-icon-carousel" />
                                </a>
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