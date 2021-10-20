import React from 'react';
import { Link } from 'react-router-dom';

import logo6 from '../../image/404.jpg'

const Error = () => {
    return (
        <div className='m-5'>
            <div>
                <img className='img-fluid w-75' src={logo6} alt="" />

            </div>
            <div>  <Link to='/home'><button type="button" class="btn btn-danger">Back to Home</button></Link></div>
        </div>
    );
};

export default Error;