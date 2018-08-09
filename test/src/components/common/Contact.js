import React from 'react';

import './Contact.css';
const Contact = () =>
<section id="contact" className="contact">
    <div className="container">
        <div className="row">
            <a name="#contact"></a>
            <div className="col-lg-3 m-auto">
                <div className="contact">
                    <h2 className="contact__title">
                        Contact Us
                    </h2>

                    <p className="contact__text">
                        hi-world@gmail.com
                    </p>
                    <p className="contact__number">
                        +972.53.923.6229
                    </p>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
                <form action="#" className="form">
                    <div className="form__input">
                        <input type="name" placeholder="NAME" className="form__input" required />
                    </div>
                    <div className="form__input">
                        <input type="email" placeholder="EMAIL" className="form__input" required />
                    </div>
                    <div className="form__input">
                        <input type="phone" placeholder="PHONE" className="form__input" required />
                    </div>
                    <div className="form__input">
                        <input type="message" placeholder="MESSAGE" className="form__input" required />
                    </div>
                    <div className="form__input">
                        <button type="submit" className="form__btn">SEND</button>
                    </div>
                </form>
            </div>

        </div>
    </div>
</section>

export default Contact;
