import React from 'react';
import {Link} from 'react-router-dom';

import './error.css';

const Error = () =>
<header id="header" className="error">
    <div className="container">
        <div className="row">
            <div className="col-lg-1">
                <img src={`images/home/logo/L.png`}  alt="Hi-World" className="logo" />
            </div>
            <div className="col-lg-4 ml-auto">
                <nav>
                    <ul className="menu d-flex justify-content-center">
                        <li className="menu__item">
                            <Link to='/#'>WORK</ Link>
                        </li>
                        <li className="menu__item">
                            <a href="#info">ABOUT</a>
                        </li>
                        <li className="menu__item">
                            <Link to='/price'>PRICES</ Link>
                        </li>
                        <li className="menu__item">
                            <a href="#contact">CONTACT</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-12 m-auto">
                <div className="errorOffer">
                    <h1 className="error__title">404</h1>
                    <p className="error__text">Uncnown Page</p>
                    <p className="error__button">
                        <Link to='/#'>GO HOME</ Link>
                    </p>

                </div>
            </div>
        </div>
    </div>
</header>



export default Error;
