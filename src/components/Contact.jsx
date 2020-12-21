import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import '@animxyz/core';
import emailjs from 'emailjs-com';
import './css/contact.css';


const Contact = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('my_portfolio', 'template_pn9gwh3', e.target, 'user_TrJhFQroBtQiDIYUz9Edf')
            .then((result) => {
                alert("Message Sent");
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };
    return (
        <>
            <div className="contact-main">
                <Header />
                <div className="contact-form-div">
                    <h1 className="contact-heading xyz-in" xyz="fade-100 duration-15">Contact Me</h1>
                    <form onSubmit={sendEmail} xyz="fade-100 stagger-5 ease-ease down-100 duration-10"                    >
                        <input className="input-tag  xyz-in" name="name" required type="text" placeholder="Name"></input>
                        <input className="input-tag xyz-in" name="email" required type="email" placeholder="Email"></input>
                        <textarea className="input-tag xyz-in text-area-tag" name="message" required cols="30" rows="3" placeholder="Message"></textarea>
                        <input className="btn-class xyz-in" type="submit" value="Send"></input>
                    </form>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Contact;