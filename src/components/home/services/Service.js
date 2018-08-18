import React from 'react';

import ServiceBlock from './ServiceBlock';

import {BLOCKS_INFO} from './blocksInfo';

import './Service.css';

const Service = () => {
  const serviceBlocks = BLOCKS_INFO.map(elem => <ServiceBlock
    pathToImg={elem.path}
    text={elem.text}
    alt={elem.alt}
  />)
  ;

  return (
  <section id="services" className="services">
      <div className="container">
              <div className="row">
                  <div className="col-lg-4 m-auto">
                      <div className="ourServices">
                          <h2 className="ourServices__title">
                              Our Services
                          </h2>
                      </div>
                  </div>
              </div>
              <div className="row">
                  <div className="col-lg-12">
                      <nav>
                          <ul className="servicesMenu d-flex justify-content-center">
                              {serviceBlocks}
                          </ul>
                      </nav>
                  </div>
              </div>
      </div>
  </section>
  )
}

export default Service;
