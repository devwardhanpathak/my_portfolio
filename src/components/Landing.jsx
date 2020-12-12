import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import './css/landing.css';

const Landing = () => {
    return (
        <>
            <div className="landing-main">
                <Header />
                <div className="text-div">
                    <h2 className="greet-tag">Hi, I am</h2>
                    <h1 className="name-tag">Devwardhan Pathak</h1>
                    <h2 className="what-tag">Front-End Developer</h2>
                    <h3 className="tech-tag">JavaScript/CSS/React</h3>
                </div>
                <Footer />
            </div>
        </>
    );
};
export default Landing;