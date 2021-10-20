import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitterSquare, } from '@fortawesome/free-brands-svg-icons'
import { faLocationArrow, faEnvelope, faPhoneSquare } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    const element1 = <FontAwesomeIcon icon={faLocationArrow} />
    const element2 = <FontAwesomeIcon icon={faPhoneSquare} />
    const element3 = <FontAwesomeIcon icon={faTwitterSquare} />
    const element4 = <FontAwesomeIcon icon={faEnvelope} />
    return (
        <div>

            <div>
                <div className='d-flex'>
                    <div className='mx-3'>
                        <p>{element1}</p>
                    </div>
                    <div>
                        <p>21 Revolution Streel</p>
                    </div>
                </div>
                <div className='d-flex'>
                    <div className='mx-3'>
                        <p>{element2}</p>
                    </div>
                    <div>
                        <p> +1 299 221213</p>
                    </div>
                </div>
                <div className='d-flex'>
                    <div className='mx-3'>
                        <p>{element4}</p>
                    </div>
                    <div>
                        <p>maher168082@gmail.com</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;