import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import './css/contact.css';


const Contact = () => {
    return (
        <>
            <div className="contact-main">
                <Header />
                <div className="contact-form-div">
                    <h1 className="contact-heading">Contact Me</h1>
                    <form>
                        <input className="input-tag" required type="text" placeholder="Name"></input>
                        <input className="input-tag" required type="email" placeholder="Email"></input>
                        <textarea className="input-tag" required cols="30" rows="3" placeholder="Message"></textarea>
                        <button className="btn-class" type="submit">Send</button>
                    </form>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Contact;