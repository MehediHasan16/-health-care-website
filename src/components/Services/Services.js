import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./heartCare.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])



    return (


        <div>
            <h1 className=' m-5 text-danger'>Our Expert</h1>
            <div className="row row-cols-1 row-cols-md-3 m-5 g-4">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;