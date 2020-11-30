import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import my_pic from './image/aboutme.jpeg'
import './css/header.css';

class Header extends React.Component {

    state = {};

    openNav = () => {
        if (
            document.getElementById("sideNav") &&
            document.getElementById("main_box")
        ) {
            document.getElementById("sideNav").style.width = "500px";
            document.getElementById("main_box").style.marginLeft = "0px";
        }
    };

    closeNav = () => {
        if (
            document.getElementById("sideNav") &&
            document.getElementById("main_box")
        ) {
            document.getElementById("sideNav").style.width = "0";
            document.getElementById("main_box").style.marginLeft = "0";
        }
    };


    render() {
        return (
            <>
                <div className="header-main">
                    <div className="header-container">
                        <span className="l-text" id="main_box" onClick={this.openNav}>Devwardhan</span>
                        <div id="sideNav" className="side_menu">
                            <img className="img-fluid menu_logo" src={my_pic} />
                            <Link className="close_btn" href="javascript:void(0)" onClick={this.closeNav}> &times;</Link>
                        </div>
                        <ul className="nav-links">
                            <li><Link className="li-links" to="/" >About Me</Link></li>
                            <li><Link className="li-links" to="/" >My Work</Link></li>
                            <li><Link className="li-links" to="/" >Contact Me</Link></li>
                        </ul>
                    </div>
                </div>
            </>
        );
    }
};

export default Header;