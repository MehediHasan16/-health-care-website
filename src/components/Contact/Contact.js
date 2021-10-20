import React from 'react';
import logo11 from '../../image/contact.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faLocationArrow, faEnvelope, faPhoneSquare, faHeartbeat, faBuilding } from '@fortawesome/free-solid-svg-icons';
import './Contact.css';

const Contact = () => {
    const icon1 = <FontAwesomeIcon icon={faLocationArrow} />
    const icon2 = <FontAwesomeIcon icon={faPhoneSquare} />
    const icon3 = <FontAwesomeIcon icon={faEnvelope} />
    const icon4 = <FontAwesomeIcon icon={faHeartbeat} />
    return (
        <div>

            <div >
                <img className="img-fluid w-75 border-bottom mb-5" src={logo11} alt="" />
            </div>
            <div className='d-lg-flex justify-content-lg-around'>
                <div className='border-end p-5'>
                    <p className='icon-style'>{icon1}</p>
                    <h5>ADDRESS</h5>
                    <p>27th Avenue </p>
                    <p> New York, W2 3XE, US</p>
                </div>
                <div className='border-end  p-5'>
                    <p className='icon-style'>{icon2}</p>
                    <h5>CALL US</h5>
                    <p>0-800-2336-7820</p>
                    <p>0-800-2344-6477</p>
                </div>

                <div className='border-end p-5 '>
                    <p className='icon-style'>{icon3}</p>
                    <h5>ADDRESS</h5>
                    <p>office@medicare.com</p>
                    <p> book@medicare.com</p>
                </div>
                <div className=' p-5'>
                    <p className='icon-style'>{icon4}</p>
                    <h5>BOOK AN APPOINTMENT</h5>
                    <p>Click here to book an
                    </p>
                    <p>appointment at Medicare.</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;