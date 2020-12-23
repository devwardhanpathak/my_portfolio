import React from 'react';
import './css/about.css';
import Header from './Header.jsx';
import '@animxyz/core';
import Footer from './Footer.jsx';

const About = () => {
    return (
        <>
            <div className="about-main">
                <Header />
                <div className="about-text">
                    <h1 className="about-heading xyz-in" xyz="fade-100 up-75 duration-15">About Me</h1>
                    <p className="about-para xyz-in" xyz="fade-100 ease-ease down-100 duration-15">
                        Hi! My name is Devwardhan Pathak currently
                        In final year of engineering. I'm a Front-End developer and I create responsive User Interface.
                        I can work on HTML, CSS, JavaScript, Bootstrap and React.
                     I Love cooking, watching movies and explore new technologies.</p>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default About;