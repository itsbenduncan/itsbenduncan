import React from 'react';
import './Portraits.css';
import portraits1 from '../img/Portraits/portraits1.jpg';
import portraits2 from '../img/Portraits/portraits2.png';
import portraits3 from '../img/Portraits/portraits3.jpg';
import portraits4 from '../img/Portraits/portraits4.jpg';
import portraits5 from '../img/Portraits/portraits5.jpg';
import portraits6 from '../img/Portraits/portraits6.jpg';
import portraits7 from '../img/Portraits/portraits7.jpg';
import portraits8 from '../img/Portraits/portraits8.jpg';
import portraits9 from '../img/Portraits/portraits9.jpg';
import portraits10 from '../img/Portraits/portraits10.png';

const Portraits = () => {
    return (
        <div className="portraits-gallery-container">
            <div className="portraits-gallery">
                <img className="portraits-thumbnail" src={portraits1} alt="Portrait 1" />
                <img className="portraits-thumbnail" src={portraits2} alt="Portrait 2" />
                <img className="portraits-thumbnail" src={portraits3} alt="Portrait 3" />
                <img className="portraits-thumbnail" src={portraits4} alt="Portrait 4" />
                <img className="portraits-thumbnail" src={portraits5} alt="Portrait 5" />
                <img className="portraits-thumbnail" src={portraits6} alt="Portrait 6" />
                <img className="portraits-thumbnail" src={portraits7} alt="Portrait 7" />
                <img className="portraits-thumbnail" src={portraits8} alt="Portrait 8" />
                <img className="portraits-thumbnail" src={portraits9} alt="Portrait 9" />
                <img className="portraits-thumbnail" src={portraits10} alt="Portrait 10" />
            </div>
        </div>
    )
}

export default Portraits;