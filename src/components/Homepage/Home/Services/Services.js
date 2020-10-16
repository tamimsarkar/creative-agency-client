import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/services')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])
    return (
        <section>
            <div className="container mt-5 p-4" style={{ position: 'relative' }}>
                <h3 className="text-center">Provide awesome <span style={{ color: "#7AB259" }}>services</span></h3>
                {
                    services.length === 0 ? <img style={{ height: '50px', position: 'absolute', left: '50%', }} src="https://icon-library.com/images/spinner-icon-gif/spinner-icon-gif-10.jpg" alt="Loading" /> :
                        <div className="row  justify-content-center pt-5">
                          
                                {
                                    services.map(service => (

                                        <div className=" mt-2 mb-2" key={service._id} className="col-md-4">
                                            <Service services={service} />
                                        </div>
                                    ))
                                }
                           
                        </div>
                }

            </div>
        </section>
    );
};

export default Services;