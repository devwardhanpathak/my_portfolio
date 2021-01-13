import React, { useRef, useEffect } from 'react';
import Header from './Header.jsx';
import MyWorkCard1 from './MyWorkCard1.jsx';
import MyWorkCard2 from './MyWorkCard2.jsx';
import Carousel from 'react-bootstrap/Carousel';
import Footer from './Footer.jsx';
import { TweenMax, Power3 } from 'gsap';
import './css/mywork.css';

const MyWork = () => {
    let myWork = useRef(null);
    let sliderTitle = useRef(null);
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
    }, []);
    return (
        <>
            <div className="my-work-main">
                <Header />
                <h1 ref={titlele => { sliderTitle = titlele }} className="slider-title">Projects</h1>
                <div ref={el => { myWork = el }} className="carousel-div">
                    <Carousel>
                        <Carousel.Item>
                            <MyWorkCard1 />
                        </Carousel.Item>
                        <Carousel.Item>
                            <MyWorkCard2 />
                        </Carousel.Item>
                    </Carousel>
                </div>
                <Footer />
            </div>
        </>
    );
};
export default MyWork;