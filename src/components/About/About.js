import React from 'react';
import './About.css';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import benduncan from './img/benduncan.jpeg';
import twitter from './img/twitter.png';
import github from './img/github.png';
import linkedin from './img/linkedin.png';

const About = () => {

    const { scrollYProgress } = useViewportScroll();
    const initial = useTransform(scrollYProgress, x => x + 0.05);
    scrollYProgress.onChange(console.trace);


    return (
    
        <article style={{ position: "relative" }}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 5 }} >
                <motion.div
                    style={{
                        width: 2,
                        height: 300,
                        background: "#222831",
                        position: "fixed",
                        top: "25%",
                        left: 12,
                        right: 0,
                        scaleY: initial,
                        originY: 0
                    }}
                ></motion.div>
                <motion.div
                    style={{
                        width: 2,
                        height: 300,
                        background: `rgba(0,0,0,.02)`,
                        position: "fixed",
                        top: "25%",
                        left: 12,
                        right: 0,
                        scaleY: 1,
                        originY: 0
                    }}
                ></motion.div>
            </motion.div>

            <div className="main-container">
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
                    transition={{ delay: 2.25, duration: 0.5 }}>
                </motion.div>
                <motion.div className="social-icons"
                    animate={{ scaleX: [0, 1] }}
                    transition={{ delay: 2.25, duration: 0.5 }} >
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
                <a href="#resume" className="learn-more">learn more</a>
            </div>
            <div className="second-block-container">
                <div className="about-info">
                    <div>
                        <h1 className="about-header">Who</h1>
                        <br /> 
                        <div className="about-content">
                        Dynamic and efficient, I bring a breadth of multi-disciplinary knowledge themed in technology, 
                        creating excellent problemsolving and team-orientated skills. 
                        I am a self-driven programmer with a passion for the environment. <br />
                        I am a 28 years old and based in Honolulu, HI. 
                        </div>
                    </div>
                    <div>
                        <h1 className="about-header">What</h1>
                        <br /> 
                        I work and study in the field Earth Sciences and various forms of prgramming. I offer a range of expertise
                        from web developmend and scientific programming with python,
                        to photography and research science. 
                        <br /><br />
                    </div>
                    <div>
                        <h1 className="about-header">Skills</h1><br />
                        <ul id="about-ul">
                            <li>HTML 5, CSS 3, Javascript, Python, React, PostgresQL, Matlab</li>
                            <li>Teamwork, communication, & remote work</li>
                            <li>Time & project management</li>
                            <li>Photography, filmmaking, & live production</li>
                            <li>Customer orientated sales, technical training, & customer education</li>
                            <li>Proficient in Japanese</li> 
                            <li>Experience traveling, surfing, and outdoor work</li>
                            <li>Expert in Final Cut Pro X, Apple products & software, Adobe software, & more</li>
                        </ul>
                    </div>
                    <h1 className="about-header">itsbenduncan@gmail.com</h1>
                    <div id="resume" className="resume">
                        <div className="resume-button">
                            <a href="https://itsbenduncan.github.io/resume/" target="_blank" rel="noopener noreferrer">
                                RESUME
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default About;