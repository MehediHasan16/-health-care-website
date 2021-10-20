import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';
import logo5 from '../../image/register.jpg'
const Register = () => {
    const { handleRegistration, handlePasswordChange, handleEmailChange, handleGoogleSigin } = useAuth();

    return (
        <div className='m-5'>
            <h1 className='text-primary m-5'>Please Register Now</h1>
            <div className='row'>
                <div className='col-md-6'>
                    <form onSubmit={handleRegistration}>
                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                                <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3" required />
                            </div>
                        </div>

                        <div className='d-flex justify-content-center align-items-center '>
                            <div>
                                <button type="submit" className="btn btn-primary m-4">Submit</button>
                            </div>

                            <div>

                                <button onClick={handleGoogleSigin} type="button" class="btn btn-danger">Google Sigin</button>
                            </div>
                        </div>
                    </form>

                    <Link to='./login'>Already have a account?</Link>
                </div>
                <div className='col-md-6'>
                    <img className='w-75' src={logo5} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Register;