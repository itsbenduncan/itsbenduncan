import React from 'react';
import './Portfolio.css';
import face from './face.png';
import camera from './camera.png';
import weather from './weather.png';
// import { motion } from 'framer-motion';

const Portfolio = () => {
    return (
        <div className="portfolio-container">
            <div className="portfolio-card-style">
                <img src={ face } alt="face icon" className="portfolio-card-img"></img>
                    <a href="http://itsbenduncan-face-recognition.herokuapp.com/" target="_blank">
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
            <div className="portfolio-card-style">
                <img src={ camera } alt="camera icon" className="portfolio-card-img"></img>
                    <a href="https://photo.itsbenduncan.com/" target="_blank">
                        <div className="portfolio-card-bottom">
                            <span id="bottom-title">Photography Portfolio</span><br/>
                            <span>
                                This website is contains my own content and serves my professional photography business.
                            </span>
                        </div>
                    </a>
            </div>
            <div className="portfolio-card-style">
                <img src={ weather } alt="weather icon" className="portfolio-card-img"></img>
                    <a href="https://twitter.com/itsweatherbot" target="_blank">
                        <div className="portfolio-card-bottom">
                            <span id="bottom-title">Twitter Weather Bot</span><br/>
                            <span>
                                This is a python based twitter weather bot. Every hour on the hour it tweets weather information for Honolulu, HI.
                            </span>
                        </div>
                    </a>
            </div>
        </div>
    )
}

export default Portfolio;