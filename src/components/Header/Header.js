import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../image/heart-logo-1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'

import useAuth from '../../hooks/useAuth';



const Header = () => {
    const { user, handleLogout } = useAuth();
    console.log(user);
    const element1 = <FontAwesomeIcon icon={faFacebook} />
    const element2 = <FontAwesomeIcon icon={faTwitterSquare} />
    return (
        <div className='d-lg-flex justify-content-lg-between  px-4'>
            <div className='d-lg-flex justify-content-lg-center'>
                <div >
                    <nav className="navbar navbar-expand-lg navbar-collapse ms-2 ">
                        <div class="container-fluid ">
                            <div className=' mx-5 d-lg-flex justify-content-lg-center align-items-center '>
                                <div className=' rounded-circle'>
                                    <img style={{ height: '100px', borderRadius: '50px' }} src={logo} alt="" />
                                </div>
                                <div><h3 className='fw-bold'>MEDI<span>CARE</span></h3></div>

                            </div>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse   " id="navbarSupportedContent">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0  ">
                                    <li class="nav-item">
                                        <Link className=" nav-font" to='/home'>Home</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link className=" nav-font" to='/allservices'>Services</Link>
                                    </li>
                                    {user?.email ? <li onClick={handleLogout} className=" nav-font nav-item" >Logout</li>

                                        :
                                        <li class="nav-item">

                                            <Link className=" nav-font" to='/login'>Login</Link>

                                        </li>}
                                    <li class="nav-item">

                                        <Link className=" nav-font" to='/register'>Register</Link>
                                    </li>
                                    <li class="nav-item">

                                        <Link className=" nav-font" to='/contact'>Contact</Link>
                                    </li>

                                </ul>
                                <div>

                                </div>
                            </div>
                        </div>
                    </nav>
                </div>

            </div>
            <div className='m-5'>
                <h4>{user?.displayName}</h4>
            </div>

        </div>
    );
};


export default Header;