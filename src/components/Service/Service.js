import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { id, name, description, image, visitngTime, character } = props.service;
    return (
        <div>

            <div className="col">
                <div className="card h-100">
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{description}</p>

                        <Link to={`/serviceDetail/${id}`}> <button type="button" className="btn btn-danger">More Details</button></Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Service;