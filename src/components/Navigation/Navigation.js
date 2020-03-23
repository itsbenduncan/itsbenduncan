import React from 'react';
import './Navigation.css';
// import { motion } from 'framer-motion';
// import logo from './logo.png';

// const list = {
//     visible: { opacity: 1 },
//     hidden: { opacity: 0 },
// }
  
// const item = {
//     visible: { opacity: 1, x: 0 },
//     hidden: { opacity: 0, x: -100 },
// }

const Navigation = ({ onRouteChange }) => {
    return (
        <div className="nav-container">
            <div className="logo-container">
                <div className="logo">@</div>
                <div className="logo-name">itsbenduncan</div>
            </div>
            <div className="buttons">
                <button id="nav-button1" className="nav-button-style" onClick={() => onRouteChange('About')} >about</button>
                <button id="nav-button2" className="nav-button-style" onClick={() => onRouteChange('Portfolio')} >portfolio</button>
                <button id="nav-button3" className="nav-button-style" onClick={() => onRouteChange('Blog')} >blog</button>
            </div>

            {/* <div className="mobile-nav">
                <motion.ul
                    initial="hidden"
                    animate="visible"
                    variants={list}
                >
                    <motion.li variants={item} />
                    <motion.li variants={item} />
                    <motion.li variants={item} />
                </motion.ul>
            </div> */}
        </div>
    )
}

export default Navigation;