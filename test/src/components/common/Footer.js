import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';

const Footer = () =>
<footer id="footer" className="footer">
    <div className="container">
        <a name="footer"></a>
        <div className="row">
            <div className="col-lg-4">
                <nav>
                    <ul className="menu d-flex justify-content-center">
                        <li  className="menu__item">
                            <Link id={'footer'} to='/#'>Work</ Link>
                        </li>
                        <li  className="menu__item">
                            <a id={'footer'} href="#info">About</a>
                        </li>
                        <li  className="menu__item">
                            <Link id={'footer'} to='/price'>Price</ Link>
                        </li>
                        <li  className="menu__item">
                            <a id={'footer'} href="#contact">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="col-lg-4">
                <nav>
                    <ul className="creators d-flex justify-content-center">
                        <li className="creators__item">
                            <p className="creators__text">
                                hi-world@gmail.com
                            </p>
                        </li>
                        <li className="creators__item">
                            <p className="creators__text">
                                Tel Aviv,Israel
                            </p>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="col-lg-1">
                <nav>
                    <ul className="icon d-flex justify-content-center">
                        <li className="icon__item">
                            <a href="https://www.facebook.com/" className="icon__facebook">
                                <img src={`images/fb/fb.png`} alt="facebook" className="fecebook" />
                            </a>
                        </li>
                        <li className="icon__item">
                            <a href="https://www.linkedin.com/" className="icon__linkedin">
                                <img src={`images/in/in.png`} alt="linkedin" className="linkedin" />
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="col-lg-3">
                <div className="creator">
                    <p className="creator__text">
                        All rights reserved &copy Hi-World
                    </p>
                </div>
            </div>
        </div>
    </div>
</footer>

export default Footer;
