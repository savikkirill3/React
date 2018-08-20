import React from 'react';



const PriceBlock = (props) => {
    return (
        <button>
            <li className="priceMenu__item">
                <img class="priceMenu__img" src={props.pathToImg} alt={props.alt} />
                 <p class="priceMenu__text">{props.text}</p>
            </li>
        </button>
    )
}

export default PriceBlock;