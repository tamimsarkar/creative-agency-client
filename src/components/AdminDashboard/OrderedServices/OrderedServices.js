import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { UserContext } from '../../../App';

const OrderedServices = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [orders,setOrders] = useState([])

    useEffect(() => {
        fetch('https://fast-falls-01927.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setOrders(data))
        
    }, [])
    return (
        <div className="container m-auto">
            <h3 >Service list</h3>
          
            <div className="row">
                {
                    orders.map(order => (
                        <div key={order._id} className="col-md-4 mt-4 review__card">
                                <div>
                                    <div className="card__top__info">
                                        <img style={{height:'50px',objectFit:'contain',borderRadius:'50%'}}    src={`data:image/png;base64,${order.image.img}`}  alt="reviewer"/>
                                        <div>
                                           <h5>{order.service}</h5>
                                        </div>
                                    </div>
                                    <small className="review__des text-secondary">{order.description}</small>
                                </div>
                            </div>
                    ))
                }
               
            </div> 
            </div>
        
    );
};

export default OrderedServices;