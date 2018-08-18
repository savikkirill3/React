import React  from 'react';
import { Link } from 'react-router-dom';

import './info.css';

const Info = () => <section id="info" className="info">
    <div className="container">
        <a name="info"></a>
        <div className="row">
            <div className="col-lg-4 m-auto">
                <div className="title">
                    <h2 className="title__main">
                        Lorem ipsum dolor
                    </h2>
                    <p className="title__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Nulla ullamcorper libero sit amet suscipit vehicula.
                        Donec ultricies molestie finibus. Cras sed diam sed
                        turpis ullamcorper iaculis.
                    </p>
                    <p className="title__button">
                        <Link to='/price'>VIEW PRICES</ Link>
                    </p>
                </div>
            </div>
            <div className="col-lg-5 ml-lg-auto">
                <img src={`images/home/iphone.png`} className="iphone" alt="iPhone" />
            </div>
        </div>
    </div>
</section>


export default Info;
