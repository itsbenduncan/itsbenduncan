import React from 'react';
import './About.css';
import BenDuncan from './BenDuncan.jpg';

const About = () => {
    return (
        <div className="about-container">
            <img src={ BenDuncan } alt="Ben Duncan" />
        </div>
    )
}

export default About;