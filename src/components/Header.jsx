import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Landing from './Landing.jsx';
import './css/header.css';

const Header = () => {
    return (
        <>
            <div className="header-main">
                <div className="header-container">
                    <Link to="/" className="l-text">Devwardhan</Link>
                    <ul className="nav-links">
                        <li className="li-tag"><Link className="li-links" to="/About" >About Me</Link></li>
                        <li className="li-tag"><Link className="li-links" to="/" >My Work</Link></li>
                        <li className="li-tag"><Link className="li-links" to="/Contact" >Contact Me</Link></li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Header;