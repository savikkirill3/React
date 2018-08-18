import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = () =>
    <header id="header" className="header">
        <div className="container">
            <div className="row">
                <div className="col-lg-1">
                    <img src={`images/home/logo/L.png`}  alt="Hi-World" className="logo" />
                </div>
                <div className="col-lg-4 ml-auto">
                    <nav>
                        <ul className="menu d-flex justify-content-center">
                            <li className="menu__item">
                                <a href="#">WORK</a>
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
                    <div className="offer">
                        <h1 className="offer__title">DESIGN & DEVELOPMENT</h1>
                        <p className="offer__text">Hi-World studio. We are Tel Aviv based hi-tech startup, specialized
                            in design and software development.</p>
                        <p className="offer__button">
                            <a href="#contact">
                                CONTACT US
                            </a>
                        </p>
                        <p className="offer__down">
                            <a href="#info">
                                <i className="fas fa-angle-down"></i>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </header>


export default Header;

