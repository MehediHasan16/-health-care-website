
import React from 'react';
import { Carousel } from 'react-bootstrap';
import logo1 from '../../image/banner1.jpg';
import logo2 from '../../image/banner2.jpg';
import logo3 from '../../image/banner3.jpg';


const Banner = () => {
    return (
        <div >
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid"
                        src={logo1}
                        alt="First slide"
                    />

                    <Carousel.Caption>
                        <h1 className='  fw-bold'>Healthy Heart,</h1>
                        <p>healthy Family</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid"
                        src={logo2}
                        alt="Second slide"
                    />


                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid"
                        src={logo3}
                        alt="Third slide"
                    />


                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;