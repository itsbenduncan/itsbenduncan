import React from 'react';
import './Navigation.css';
import { motion } from 'framer-motion';

const Navigation = ({ onRouteChange }) => {
    return (
        <motion.div className="nav-container"
            animate={{ y: [0, -5, 0, -5, 0] }}
            transition={{ delay: 4, duration: 1 }} >
            <div className="logo-container">
                <div className="logo">@</div>
                <div className="logo-name">itsbenduncan</div>
            </div>
            <div className="buttons">
                <button id="nav-button1" className="nav-button-style" onClick={() => onRouteChange('About')} >about</button>
                <button id="nav-button2" className="nav-button-style" onClick={() => onRouteChange('Portfolio')} >portfolio</button>
                <button id="nav-button3" className="nav-button-style" onClick={() => onRouteChange('Blog')} >blog</button>
            </div>
        </motion.div>
    )
}

export default Navigation;