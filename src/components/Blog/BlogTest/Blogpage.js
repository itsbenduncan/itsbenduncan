import React from 'react';
import './Blog.css';

const Blogpage = ({ onRouteChange }) => {
    return (
        <div className="container">
            <button className="post" onClick={() => onRouteChange('Post1')}>Post One</button>
            <button className="post" onClick={() => onRouteChange('Post2')}>Post Two</button>
            <button className="post" onClick={() => onRouteChange('Post2')}>Post Three</button>
        </div>
    )
}

export default Blogpage;