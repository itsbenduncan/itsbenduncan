import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
import './Gallery.css';
import AustraliaRock from './img/AustraliaRock.png';
import Portraits from './Galleries/Portraits';

const Gallery = () => {

    return (
        <div className="gallery-container">
            {/* <div className="gallery">
                <div className="gallery-image">
                    <img className="gallery-image" src={ Glacier } alt="Glacier"></img>
                    <img className="gallery-image" src={ AlyssaFloat } alt="Alyssa Float"></img>
                    <img className="gallery-image" src={ AustraliaRock } alt="Australia Rock"></img>
                    <img className="gallery-image" src={ AerialBeach } alt="Aerial Beach"></img>
                    <img className="gallery-image" src={ GirlSurf } alt="Girl Surf"></img>
                    <img className="gallery-image" src={ IcelandStorm } alt="Iceland Storm"></img>
                </div>
            </div> */}

            <Router>
                <div class="instant-frame">
                    <div class="image-placeholder">
                        <img src="https://images.squarespace-cdn.com/content/v1/5a00a0894c0dbf74c1e1ff26/1579734960233-L5B21LPS5C28AYVSISPW/ke17ZwdGBToddI8pDm48kKRbRjAOOGYxMxr3nVltWCl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UQmLRbitZvAwpXQSYRvzlulZz5Huh4RYRYiOoBqRGMyqo7FeJskalxBbBwn9mkF54A/0rho027_0rho027-R2-075-36.JPG" />
                    </div>
                    <div class="title">
                    <Link to="/portraits">Portraits</Link>
                    </div>
                </div>
                <div class="instant-frame">
                    <div class="image-placeholder">
                        <img src="https://images.squarespace-cdn.com/content/v1/5a00a0894c0dbf74c1e1ff26/1579734960233-L5B21LPS5C28AYVSISPW/ke17ZwdGBToddI8pDm48kKRbRjAOOGYxMxr3nVltWCl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UQmLRbitZvAwpXQSYRvzlulZz5Huh4RYRYiOoBqRGMyqo7FeJskalxBbBwn9mkF54A/0rho027_0rho027-R2-075-36.JPG" />
                    </div>
                    <div class="title">
                    <Link to="/landscape">Landscape</Link>
                    </div>
                </div>
                    

                <Switch>
                    <Route path="/portraits">
                        <Portraits />
                    </Route>
                    <Route path="/landscape">
                        <Portraits />
                    </Route>
                </Switch>
            </Router>



            {/* <div class="instant-frame">
                <div class="image-placeholder">
                    <img src="https://images.squarespace-cdn.com/content/v1/5a00a0894c0dbf74c1e1ff26/1579734960233-L5B21LPS5C28AYVSISPW/ke17ZwdGBToddI8pDm48kKRbRjAOOGYxMxr3nVltWCl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UQmLRbitZvAwpXQSYRvzlulZz5Huh4RYRYiOoBqRGMyqo7FeJskalxBbBwn9mkF54A/0rho027_0rho027-R2-075-36.JPG" />
                </div>
                <div class="title">
                    Portraits
                </div>
            </div>
            <div class="instant-frame">
                <div class="image-placeholder">
                    <img className="gallery-image" src={ AustraliaRock } alt="Australia Rock"></img>
                </div>
                <div class="title">
                    Landscape
                </div>
            </div> */}
        </div>
    )
}

export default Gallery;