import React from 'react';
import './css/about.css';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

const About = () => {
    return (
        <>
            <div className="about-main">
                <Header />
                <div className="about-text">
                    <h1 className="about-heading">About Me</h1>
                    <p className="about-para">Aliquam erat volutpat. Aenean tincidunt eleifend rhoncus.
                    Phasellus rutrum metus id sem venenatis, et dapibus erat semper. Curabitur dignissim,
                    risus molestie egestas convallis, tortor quam rutrum leo, scelerisque auctor nibh urna et metus.
                    Aliquam dignissim pellentesque placerat. Donec scelerisque tristique dolor,
                    sit amet auctor dolor
                    lobortis venenatis. Nam cursus, mi in bibendum sollicitudin,
                     arcu ipsum vulputate dui, at commodo nisi magna ac urna.</p>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default About;