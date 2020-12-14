import React, { useRef, useEffect } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import { TweenMax, Power0, Linear } from 'gsap';
import emailjs from 'emailjs-com';
import './css/contact.css';


const Contact = () => {
    let heading = useRef(null);
    let input1 = useRef(null);
    let input2 = useRef(null);
    let input3 = useRef(null);
    let input4 = useRef(null);
    useEffect(() => {
        TweenMax.to(
            heading,
            .6,
            {
                opacity: 1,
                ease: Linear.easeNone

            })
        TweenMax.to(
            input1,
            .2,
            {
                opacity: 1,
                ease: Linear.easeNone

            })
        TweenMax.to(
            input2,
            .2,
            {
                opacity: 1,
                delay: .2,
                ease: Linear.easeNone
            })
        TweenMax.to(
            input3,
            .3,
            {
                opacity: 1,
                delay: .3,
                ease: Linear.easeNone
            })
        TweenMax.to(
            input4,
            .4,
            {
                opacity: 1,
                delay: .4,
                ease: Power0.easeIn
            })

    }, []);

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
                    <h1 ref={headingEl => { heading = headingEl }} className="contact-heading">Contact Me</h1>
                    <form onSubmit={sendEmail}>
                        <input ref={input1El => { input1 = input1El }} className="input-tag contact-animation" name="name" required type="text" placeholder="Name"></input>
                        <input ref={input2El => { input2 = input2El }} className="input-tag contact-animation" name="email" required type="email" placeholder="Email"></input>
                        <textarea ref={input3El => { input3 = input3El }} className="input-tag text-area-tag contact-animation" name="message" required cols="30" rows="3" placeholder="Message"></textarea>
                        <input ref={input4El => { input4 = input4El }} className="btn-class contact-animation" type="submit" value="Send"></input>
                    </form>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Contact;