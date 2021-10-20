import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import logo7 from '../../image/heart2.jpg';
import './ServiceDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faLocationArrow, faEnvelope, faPhoneSquare, faHeartbeat, faBuilding } from '@fortawesome/free-solid-svg-icons';


const ServiceDetail = () => {
    const element8 = <FontAwesomeIcon icon={faHeartbeat} />
    const element9 = <FontAwesomeIcon icon={faPhoneSquare} />
    const element10 = <FontAwesomeIcon icon={faBuilding} />


    const { serviceId } = useParams();
    const [serviceInfo, setServiceInfo] = useState([]);

    useEffect(() => {
        fetch('/heartCare.json')
            .then(res => res.json())
            .then(data => setServiceInfo(data))
    }, [])
    // useEffect(() => {

    //     setOneService(findService);
    //     console.log(findService);
    // }, [serviceInfo]);
    const findService = serviceInfo?.find(service => service.id == serviceId);
    console.log(findService);

    return (
        <div className=''>


            <div className='row m-5 p-5'>
                <div className='col-6'>
                    <div className="card">
                        <img src={findService?.image} className="card-img-top img-fluid" alt="..." />
                        <div className="card-body">
                            <small>{findService?.character}</small>
                            <h5 className="card-title">{findService?.name}</h5>
                            <p className="card-text">{findService?.description}</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted"> Visiting time: {findService?.visitngTime}</small>
                        </div></div>


                </div>
                <div className='col-6   '>
                    <div className="card h-100  border-0">
                        <img src={logo7} className="card-img-top w-75" alt="..." />
                        <div className="card-body">
                            <div className='row align-items-center'>
                                <div className=' col-2'>
                                    <p className='icon-style3' >{element8}</p>
                                </div>
                                <div className=' col-10  '>
                                    <h5 className="card-title text-start ">{findService?.character}</h5>

                                </div>

                            </div>
                            <div className='row align-items-center'>
                                <div className=' col-2'>
                                    <p className='icon-style3' >{element9}</p>

                                </div>
                                <div className=' col-10  '>

                                    <h6 className="card-title text-start ">
                                        24/7 EMERGENCY</h6>
                                    <p className='text-start'>0-800-777-2331</p>
                                </div>

                            </div>
                            <div className='row align-items-center'>
                                <div className=' col-2'>
                                    <p className='icon-style3' >{element10}</p>
                                </div>
                                <div className=' col-10  '>
                                    <h5 className="card-title text-start ">
                                        OUR LOCATION
                                    </h5>
                                    <p className='text-start '>27th Avenue
                                        New York, W2 3XE</p>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>




            </div>
        </div>
    );
};

export default ServiceDetail;