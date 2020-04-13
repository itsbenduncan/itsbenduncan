import React from 'react';
import './Navigation.css';
import { motion } from 'framer-motion';

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
        </div>
    )
}

export default Navigation;