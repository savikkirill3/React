import React from 'react';

import Info from './info/Info';
import Service from './services/Service';
import Header from './header/Header';
import Contact from '../common/Contact';
import Footer from '../common/Footer';
import './Home.css';

const Home = () =>
    <div>
        <Header />
        <Info />
        <Service />
        <Contact />

    </div>


export default Home;
