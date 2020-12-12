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
    useEffect(() => {
        TweenMax.to(
            myWork,
            1.2,
            {
                opacity: 1,
                y: 0,
                ease: Power3.easeIn
            })
    }, []);
    return (
        <>
            <div className="my-work-main">
                <Header />
                <h1 className="slider-title">Projects</h1>
                <div ref={el => { myWork = el }} className="carousel-div">
                    <Carousel>
                        <Carousel.Item>
                            <img className="project-image" src={MunimPic} />
                            <span className="carousel-details">
                                <h1 className="carousel-heading">Project Heading</h1>
                                <p className="project-details">L:oerm dufhvbdfnv jdfkdsj kjdfbkjd ndjkfhds kjhfkj wkjsk nkejf</p>
                                <a href="https://github.com/devwardhanpathak" target="_blank">
                                    <GitHubIcon className="material-icon-carousel" />
                                </a>
                            </span>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="project-image" src={MunimPic} />
                            <span className="carousel-details">
                                <h1 className="carousel-heading">Project Heading</h1>
                                <p className="project-details">L:oerm dufhvbdfnv jdfkdsj kjdfbkjd ndjkfhds kjhfkj wkjsk nkejf</p>
                                <a href="https://github.com/devwardhanpathak" target="_blank">
                                    <GitHubIcon className="material-icon-carousel" />
                                </a>
                            </span>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="project-image" src={MunimPic} />
                            <span className="carousel-details">
                                <h1 className="carousel-heading">Project Heading</h1>
                                <p className="project-details">L:oerm dufhvbdfnv jdfkdsj kjdfbkjd ndjkfhds kjhfkj wkjsk nkejf</p>
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