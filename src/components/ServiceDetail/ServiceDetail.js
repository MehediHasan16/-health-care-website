import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [serviceInfo, setServiceInfo] = useState([]);
    const [oneService, setOneService] = useState({});
    useEffect(() => {
        fetch('/heartCare.json')
            .then(res => res.json())
            .then(data => setServiceInfo(data))
    }, [])
    useEffect(() => {
        const findService = serviceInfo?.find(service => service.id == serviceId);
        setOneService(findService);
        console.log();
    }, [serviceInfo]);

    return (
        <div>
            <h1>this service id :{serviceId}</h1>
            <h1>this name:{ }</h1>
        </div>
    );
};

export default ServiceDetail;