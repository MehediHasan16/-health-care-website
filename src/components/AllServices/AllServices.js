import React from 'react';
import './AllServices.css'

const AllServices = () => {
    return (
        <div>
            <div>
                <p className=''>AT ONE GLANCE</p>
                <h1 className='fw-bold font-style'>All our <span>services</span></h1>
                <p className='mt-3 p-4'>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. <br />Override the digital divide with additional clickthroughs.</p>

            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4 m-4 ">
                <div className="col">
                    <div className="card h-100 shadow">
                        <img src="http://medicare.bold-themes.com/cardiology/wp-content/uploads/sites/10/2018/02/img-blog-post-10-1200x800.jpeg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title border-bottom  text-danger">Pacemaker</h5>
                            <p className="card-text">A pacemaker is an electrically-charged medical device. Your surgeon implants it under your skin to help manage irregular heartbeats called arrhythmias.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 shadow">
                        <img src="http://medicare.bold-themes.com/cardiology/wp-content/uploads/sites/10/2018/02/img-blog-post-09.jpeg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title border-bottom  text-danger">Valve prolapse / repair</h5>
                            <p className="card-text">You have two chambers on the left side of your heart: your left atrium and your left ventricle. Your mitral valve, which is located between the two, is designed to allow blood to flow into the left ventricle but blocked from flowing back into the left atrium.</p>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card h-100 shadow">
                        <img src="http://medicare.bold-themes.com/cardiology/wp-content/uploads/sites/10/2018/02/img-gallery-07-1200x800.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title border-bottom  text-danger">Peripheral artery angioplasty</h5>
                            <p className="card-text">Angioplasty with stent placement is a minimally invasive procedure used to open narrow or blocked arteries. This procedure is used in different parts of your body, depending on the location of the affected artery. It requires only a small incision.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 shadow">
                        <img src="http://medicare.bold-themes.com/cardiology/wp-content/uploads/sites/10/2018/02/img-gallery-08-1200x800.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title border-bottom  text-danger">Valve diseases</h5>
                            <p className="card-text">Heart valve disorders can affect any of the valves in your heart. Your heart valves have flaps that open and close with each heartbeat, allowing blood to flow through the heart’s upper and lower chambers and to the rest of your body. The upper chambers of the heart are the atria, and the lower chambers of the heart are the ventricles.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 shadow">
                        <img src="http://medicare.bold-themes.com/cardiology/wp-content/uploads/sites/10/2018/02/img-gallery-12.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title border-bottom  text-danger">Heart transplant</h5>
                            <p className="card-text">A heart transplant is a surgical procedure used to treat the most serious cases of heart disease. This is a treatment option for people who are in the end stages of heart failure. Medication, lifestyle changes, and less invasive procedures haven’t succeeded. People must meet specific criteria to be considered a candidate for the procedur</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 shadow">
                        <img src="http://medicare.bold-themes.com/cardiology/wp-content/uploads/sites/10/2018/02/img-gallery-22.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title border-bottom  text-danger">Heart surgery</h5>
                            <p className="card-text">Open-heart surgery is any type of surgery where the chest is cut open and surgery is performed on the muscles, valves, or arteries of the heart.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllServices;