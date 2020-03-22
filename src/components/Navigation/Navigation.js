import React from 'react';
import './Navigation.css';

const Navigation = ({ onRouteChange }) => {
    return (
        <div className="nav-container">
            <div className="logo">itsbenduncan</div>
            <div className="buttons">
                <button id="nav-button1" className="nav-button-style" onClick={() => onRouteChange('About')} >about</button>
                <button id="nav-button2" className="nav-button-style" onClick={() => onRouteChange('Portfolio')} >portfolio</button>
                <button id="nav-button3" className="nav-button-style" onClick={() => onRouteChange('Blog')} >blog</button>
            </div>
        </div>
    )
}

export default Navigation;