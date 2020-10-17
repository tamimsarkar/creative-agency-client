import React, { useEffect } from 'react';
import { useState } from 'react';
import './ServiceList.css'
const ServiceList = () => {
    const [totalOrder, setTotalOrder] = useState([])
    useEffect(() => {
        fetch('https://fast-falls-01927.herokuapp.com/total-order')
            .then(res => res.json())
            .then(data => setTotalOrder(data))

    }, [])
    return (

        <div className="container m-5 p-5" style={{ backgroundColor: '#fff', borderRadius: '5px' ,position: 'relative'}} >
            <div className="row ">
                {
                    totalOrder.length === 0 ? <img style={{
                        height: '100px', position: 'absolute',
                        top: '50%',
                        left: '50%',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)'
                    }} src="https://icon-library.com/images/spinner-icon-gif/spinner-icon-gif-10.jpg" alt="loading" /> :

                        <table class="table">
                            <thead>
                                <tr style={{ backgroundColor: '#F5F6FA', borderRadius: '5px' }}>
                                    <th scope="col-md-3">Name</th>
                                    <th scope="col-md-3">Email ID</th>
                                    <th scope="col-md-3">Service</th>
                                    <th scope="col-md-3 ">Project Details</th>
                                    <th scope="col-md-3 ">Status</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    totalOrder.map(order => (
                                        <tr>

                                            <td>{order.name}</td>
                                            <td>{order.email}</td>
                                            <td>{order.service}</td>
                                            <td>{order.projectDetails}</td>
                                            <td>pending</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                }

            </div>
        </div>

    );
};

export default ServiceList;