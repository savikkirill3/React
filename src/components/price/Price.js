import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Contact from '../common/Contact';
import {PRICE_INFO} from "./priceInfo";
import PriceBlock from "./PriceBlock";

const Price = () => {
    var priceBlocks = PRICE_INFO.map(elem => <PriceBlock
            pathToImg={elem.path}
            text={elem.text}
            alt={elem.alt}
        />)
    ;

    return (
        <section id="price" className="price">
            <div className="container">
                <header id="headerPrice" className="header">
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
                        <div className="col-lg-12">
                            <nav>
                                <ul className="servicesMenu d-flex justify-content-center">
                                    {priceBlocks}
                                </ul>
                            </nav>
                        </div>
                    </div>
                </header>
            </div>
            <Contact />
        </section>
    )
}

export default Price;


