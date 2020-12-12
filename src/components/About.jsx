import React, { useRef, useEffect } from 'react';
import './css/about.css';
import { TweenMax, Power3 } from 'gsap';

import Header from './Header.jsx';
import Footer from './Footer.jsx';

const About = () => {
    let aboutPage = useRef(null);
    let aboutpara = useRef(null);
    let aboutHead = useRef(null);
    useEffect(() => {
        TweenMax.to(
            aboutPage,
            1.6,
            {
                opacity: 1,
                ease: Power3.easeIn
            })
        TweenMax.to(
            aboutpara,
            1.2,
            {
                y: 0,
                ease: Power3.easeIn
            })
        TweenMax.to(
            aboutHead,
            1.2,
            {
                y: 0,
                ease: Power3.easeIn
            })
    }, []);
    return (
        <>
            <div className="about-main">
                <Header />
                <div ref={el => { aboutPage = el }} className="about-text">
                    <h1 ref={headel => { aboutHead = headel }} className="about-heading">About Me</h1>
                    <p ref={parael => { aboutpara = parael }} className="about-para">Hi! My name is Devwardhan Pathak currently
                    In final of engineering. I'm a Front-End developer and I create responsive User Interface.
                    I can work on HTML, CSS, JavaScript and framework like React.
                     I Love cooking, watching movies and explore new technologies.</p>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default About;