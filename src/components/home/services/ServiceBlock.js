import React from 'react';

import './Service.css';

const ServiceBlock = (props) => {
  return (
  <li className="servicesMenu__item">
      <img class="servicesMenu__img" src={props.pathToImg} alt={props.alt} />
      <p class="servicesMenu__text">{props.text}</p>
  </li>
  )
}

export default ServiceBlock;
