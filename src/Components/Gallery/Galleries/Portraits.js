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
import portraits1t from '../img/Portraits/thumbnails/portraits1t.jpg';
import portraits2t from '../img/Portraits/thumbnails/portraits2t.jpg';
import portraits3t from '../img/Portraits/thumbnails/portraits3t.jpg';
import portraits4t from '../img/Portraits/thumbnails/portraits4t.jpg';
import portraits5t from '../img/Portraits/thumbnails/portraits5t.jpg';
import portraits6t from '../img/Portraits/thumbnails/portraits6t.jpg';
import portraits7t from '../img/Portraits/thumbnails/portraits7t.jpg';
import portraits8t from '../img/Portraits/thumbnails/portraits8t.jpg';
import portraits9t from '../img/Portraits/thumbnails/portraits9t.jpg';
import portraits10t from '../img/Portraits/thumbnails/portraits10t.jpg';

class Portraits extends React.Component {
    constructor () {
        super()
        this.state = {
            checkId: '',
        }
    }

    passTest = (id) => {
        if (this.checkId === id) {
            this.setState({ checkId: ''})
        } else {
            this.setState({ checkId: id })
        }
    }

    render() {
        return (
            <div className="portraits-gallery-container">
                <div className="portraits-gallery">
                    <img className="portraits-thumbnail" src={portraits1t} alt="Portrait 1" onClick={this.passTest.bind(this, "portraits1")} />
                    { this.state.checkId === "portraits1" &&
                        <div id="portraits1" className="lightbox-container">
                            <img src={portraits1} alt="Portrait 1" className="lightbox-img" />
                            <div className="close-button">
                                    <div onClick={this.passTest.bind(this, "close-img")}>
                                        X
                                    </div>
                                    { this.state.checkId === "close-img" && document.getElementById("lightbox-container").style.display('none') }
                            </div>
                        </div>
                    }
                    <img className="portraits-thumbnail" src={portraits2t} alt="Portrait 1" onClick={this.passTest.bind(this, "portraits2")} />
                    { this.state.checkId === "portraits2" &&
                        <div id="portraits2" className="lightbox-container">
                            <img src={portraits2} alt="Portrait 2" className="lightbox-img" />
                            <div className="close-button">
                                    <div onClick={this.passTest.bind(this, "close-img")}>
                                        X
                                    </div>
                                    { this.state.checkId === "close-img" && document.getElementById("lightbox-container").style.display('none') }
                            </div>
                        </div>
                    }<img className="portraits-thumbnail" src={portraits3t} alt="Portrait 1" onClick={this.passTest.bind(this, "portraits3")} />
                    { this.state.checkId === "portraits3" &&
                        <div id="portraits3" className="lightbox-container">
                            <img src={portraits3} alt="Portrait 3" className="lightbox-img" />
                            <div className="close-button">
                                    <div onClick={this.passTest.bind(this, "close-img")}>
                                        X
                                    </div>
                                    { this.state.checkId === "close-img" && document.getElementById("lightbox-container").style.display('none') }
                            </div>
                        </div>
                    }<img className="portraits-thumbnail" src={portraits4t} alt="Portrait 1" onClick={this.passTest.bind(this, "portraits4")} />
                    { this.state.checkId === "portraits4" &&
                        <div id="portraits4" className="lightbox-container">
                            <img src={portraits4} alt="Portrait 4" className="lightbox-img" />
                            <div className="close-button">
                                    <div onClick={this.passTest.bind(this, "close-img")}>
                                        X
                                    </div>
                                    { this.state.checkId === "close-img" && document.getElementById("lightbox-container").style.display('none') }
                            </div>
                        </div>
                    }<img className="portraits-thumbnail" src={portraits5t} alt="Portrait 5" onClick={this.passTest.bind(this, "portraits5")} />
                    { this.state.checkId === "portraits5" &&
                        <div id="portraits5" className="lightbox-container">
                            <img src={portraits5} alt="Portrait 5" className="lightbox-img" />
                            <div className="close-button">
                                    <div onClick={this.passTest.bind(this, "close-img")}>
                                        X
                                    </div>
                                    { this.state.checkId === "close-img" && document.getElementById("lightbox-container").style.display('none') }
                            </div>
                        </div>
                    }<img className="portraits-thumbnail" src={portraits6t} alt="Portrait 6" onClick={this.passTest.bind(this, "portraits6")} />
                    { this.state.checkId === "portraits6" &&
                        <div id="portraits6" className="lightbox-container">
                            <img src={portraits6} alt="Portrait 6" className="lightbox-img" />
                            <div className="close-button">
                                    <div onClick={this.passTest.bind(this, "close-img")}>
                                        X
                                    </div>
                                    { this.state.checkId === "close-img" && document.getElementById("lightbox-container").style.display('none') }
                            </div>
                        </div>
                    }<img className="portraits-thumbnail" src={portraits7t} alt="Portrait 7" onClick={this.passTest.bind(this, "portraits7")} />
                    { this.state.checkId === "portraits7" &&
                        <div id="portraits7" className="lightbox-container">
                            <img src={portraits7} alt="Portrait 7" className="lightbox-img" />
                            <div className="close-button">
                                    <div onClick={this.passTest.bind(this, "close-img")}>
                                        X
                                    </div>
                                    { this.state.checkId === "close-img" && document.getElementById("lightbox-container").style.display('none') }
                            </div>
                        </div>
                    }<img className="portraits-thumbnail" src={portraits8t} alt="Portrait 8" onClick={this.passTest.bind(this, "portraits8")} />
                    { this.state.checkId === "portraits8" &&
                        <div id="portraits1" className="lightbox-container">
                            <img src={portraits8} alt="Portrait 8" className="lightbox-img" />
                            <div className="close-button">
                                    <div onClick={this.passTest.bind(this, "close-img")}>
                                        X
                                    </div>
                                    { this.state.checkId === "close-img" && document.getElementById("lightbox-container").style.display('none') }
                            </div>
                        </div>
                    }<img className="portraits-thumbnail" src={portraits9t} alt="Portrait 9" onClick={this.passTest.bind(this, "portraits9")} />
                    { this.state.checkId === "portraits9" &&
                        <div id="portraits9" className="lightbox-container">
                            <img src={portraits9} alt="Portrait 9" className="lightbox-img" />
                            <div className="close-button">
                                    <div onClick={this.passTest.bind(this, "close-img")}>
                                        X
                                    </div>
                                    { this.state.checkId === "close-img" && document.getElementById("lightbox-container").style.display('none') }
                            </div>
                        </div>
                    }<img className="portraits-thumbnail" src={portraits10t} alt="Portrait 10" onClick={this.passTest.bind(this, "portraits10")} />
                    { this.state.checkId === "portraits10" &&
                        <div id="portraits1" className="lightbox-container">
                            <img src={portraits10} alt="Portrait 10" className="lightbox-img" />
                            <div className="close-button">
                                    <div onClick={this.passTest.bind(this, "close-img")}>
                                        X
                                    </div>
                                    { this.state.checkId === "close-img" && document.getElementById("lightbox-container").style.display('none') }
                            </div>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default Portraits;