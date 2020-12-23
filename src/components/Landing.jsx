import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import '@animxyz/core';
import './css/landing.css';

const Landing = () => {
    return (
        <>
            <div className="landing-main">
                <div className="xyz-in" xyz="fade up-0 back-0 delay-30 duration-25">
                    <Header />
                </div>
                <div className="text-div" xyz="fade up-25 stagger-10">
                    <h2 className="greet-tag xyz-in">Hi, I am</h2>
                    <h1 className="name-tag xyz-in">Devwardhan Pathak</h1>
                    <h2 className="what-tag xyz-in">Front-End Developer</h2>
                    <h3 className="tech-tag xyz-in">JavaScript</h3>
                    <h3 className="tech-tag xyz-in">/CSS</h3>
                    <h3 className="tech-tag xyz-in">/React</h3>
                </div>
                <div className="xyz-in" xyz="fade up-0 back-0 delay-25 duration-25">
                    <Footer />
                </div>
            </div>
        </>
    );
};
export default Landing;