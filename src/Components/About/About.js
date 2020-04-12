import React from 'react';
import './About.css';
import BenDuncan from './BenDuncan.jpg';

const About = () => {
    return (
        <div className="about-container">
            <img id="about-photo" src={ BenDuncan } alt="Ben Duncan" />
            <div className="about-title">
                <h1>Ben Duncan</h1>
            </div>
            <div className="about-info">
                <h3>Hello and thank you for your interests to make it here!</h3><br />
                <span>I am a 28 year old photographer from Honolulu, HI.</span><br />
                <span>
                        I started my career in photography over 8 years ago by exploring and capturing the beautiful landscapes of Hawai'i.
                        Since then, I have been fortunate enough to travel the world and work with amazing clients.
                </span>
            </div>
        </div>
    )
}

export default About;