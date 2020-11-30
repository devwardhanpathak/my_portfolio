import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import bgpic from './image/download.jpg';
import './css/landing.css';
const Landing = () => {
    return (
        <>
            <div class="header-main">
                <img className="videobg" src={bgpic}></img>
                <Header />
            </div>
            <Footer />
        </>
    );
};
export default Landing;