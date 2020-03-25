import React from 'react';
import './Portfolio.css';
import brain from './brain.png';
// import { motion } from 'framer-motion';

const Portfolio = () => {
    return (
        <div className="portfolio-container">
            <div className="portfolio-card-style">
                <img src={ brain } alt="brain icon" className="portfolio-card-img"></img>
                    <a href="http://itsbenduncan-face-recognition.herokuapp.com/">
                        <div className="portfolio-card-bottom">
                            <span id="bottom-title">Face Recognition</span><br/>
                            <span>
                                Copy and paste a URL<br/>
                                to detect faces. User account<br/>
                                tracks your number of entries!
                            </span>
                        </div>
                    </a>
            </div>
        </div>
    )
}

export default Portfolio;