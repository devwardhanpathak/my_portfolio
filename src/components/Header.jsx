import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/header.css';

const Header = () => {
    return (
        <>
            <div className="header-main">
                <div className="header-container">
                    <span className="l-text">Devwardhan</span>
                    <ul className="nav-links">
                        <li className="li-tag"><Link className="li-links" to="/" >About Me</Link></li>
                        <li className="li-tag"><Link className="li-links" to="/" >My Work</Link></li>
                        <li className="li-tag"><Link className="li-links" to="/" >Contact Me</Link></li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Header;