import React from 'react';
import './About.css';
import { motion } from 'framer-motion';
import benduncan from './benduncan.jpeg';
import twitter from './twitter.png';
import github from './github.png';
import linkedin from './linkedin.png';

const About = () => {
    return (
        <div className="about-container">
            <div className="big-words">

                <motion.div id="i-am"
                    animate={{ scaleY: [1, 1.015, 1], scaleX: [1, 1.015, 1] }}
                    transition={{ delay: 0, duration: .75 }} >
                        I AM

                        <motion.img src={benduncan} alt="ben duncan headshot" id="headshot"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5, duration: .5 }}
                            >
                        </motion.img>
                </motion.div>

                <motion.div id="a-developer"
                    initial={{ opacity: 0 }}
                    animate={{ x: [-250, 0], opacity: 1 }}
                    transition={{ delay: 1.75, duration: 1 }} >
                        a developer &
                </motion.div>

                <motion.div id="research-scientist"
                    initial={{ opacity: 0 }}
                    animate={{ x: [250, 0], opacity: 1 }}
                    transition={{ delay: 1.75, duration: 1 }} >
                        research scientist
                </motion.div>
            </div>
            <motion.div className="horizontal-line"
                animate={{ scaleX: [0, 1] }}
                transition={{ delay: 3.25, duration: 0.5 }}
            ></motion.div>
            <motion.div className="social-icons"
                // initial={{ opacity: 0 }}
                // animate={{ opacity: 1 }}
                animate={{ scaleX: [0, 1] }}
                transition={{ delay: 3.25, duration: .5 }} >
                    <a href="https://twitter.com/itsbenduncan" className="social" id="social1" target="_blank" rel="noopener noreferrer">
                        <img src={ twitter } alt="twitter icon" className="social" id="social1"></img>
                    </a>
                    <a href="https://github.com/itsbenduncan" className="social" id="social2" target="_blank" rel="noopener noreferrer">
                        <img src={ github } alt="github icon" className="social" id="social2"></img>
                    </a>
                    <a href="https://linkedin.com/in/itsbenduncan" className="social" id="social3" target="_blank" rel="noopener noreferrer">
                        <img src={ linkedin } alt="linkedin icon" className="social" id="social3"></img>
                    </a>    
            </motion.div>

            <div className="arrow">
            learn more <br />
                ⬇
            </div>




        </div>
    )
}

export default About;