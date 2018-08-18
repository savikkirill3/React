import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Contact from '../common/Contact';
class Price extends Component {

    render () {
        return <div>
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
                </div>
            </header>
          <h1>Price component with value: </h1>
          <Contact />
      </div>
    }

}

export default Price;
