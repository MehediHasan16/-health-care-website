import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../image/heart-logo-1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'



const Header = () => {
    const element1 = <FontAwesomeIcon icon={faFacebook} />
    const element2 = <FontAwesomeIcon icon={faTwitterSquare} />
    return (
        <div className='d-flex justify-content-between  px-4'>
            <div className='d-flex justify-content-center'>
                <div >
                    <nav class="navbar navbar-expand-lg ms-5 ">
                        <div class="container-fluid ">
                            <div className=' mx-5 d-flex justify-content-center align-items-center '>
                                <div className=' rounded-circle'>
                                    <img style={{ height: '100px', borderRadius: '50px' }} src={logo} alt="" />
                                </div>
                                <div><h3 className='fw-bold'>MEDI<span>CARE</span></h3></div>

                            </div>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse  p-2" id="navbarSupportedContent">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0  ">
                                    <li class="nav-item">
                                        <Link className=" nav-font" to='/home'>Home</Link>
                                    </li>
                                    <li class="nav-item">

                                        <Link className=" nav-font" to='/Login'>Login</Link>

                                    </li>
                                    <li class="nav-item">

                                        <Link className=" nav-font" to='/register'>Register</Link>
                                    </li>

                                </ul>
                                <div>

                                </div>
                            </div>
                        </div>
                    </nav>
                </div>

            </div>
            <div className=''>
                <p>{element1}</p>
                <p>{element2}</p>
            </div>

        </div>
    );
};

export default Header;