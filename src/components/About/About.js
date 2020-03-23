import React from 'react';
import './About.css';
import { motion } from 'framer-motion';
import benduncan from './benduncan.jpeg';
import twitter from './twitter.png';
import github from './github.png';
import instagram from './instagram.png';

const About = () => {
    return (
        <div className="about-container">
            <div className="big-words">

                <motion.div id="i-am"
                    animate={{ scaleY: [1, 1.015, 1], scaleX: [1, 1.015, 1] }}
                    transition={{ delay: 0, duration: .75 }} >
                        I AM

                        <motion.img src={benduncan} id="headshot"
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
            <motion.div className="social-icons"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.25, duration: .5 }} >
                    <img src={ twitter } className="social"></img><br/>
                    <img src={ github } className="social"></img><br/>
                    <img src={ instagram } className="social"></img>
            </motion.div>

            {/* <motion.div className="skills-container"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.25, duration: .5 }} >
                    let skills = [ HTML, CSS, Javascript, Python, React, MATLAB, PostgresQL ]
            </motion.div> */}
        </div>
    )
}

export default About;