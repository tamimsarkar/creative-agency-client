import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ServiceContext } from '../../../../App';
import './Service.css'
const Service = (props ) => {
    const {service ,key, description,image} = props.services;
    const [servicee,setServicee] = useContext(ServiceContext)
    return (
        <Link style={{textDecoration:'none'}} onClick={() => setServicee({service,description,image})} to='/admin-dashboard/orders'>
            <div className=" service text-center" style={{ boxShadow: '1px,2px,10px solid lightgray' }}>
                <img className="mt-3 mb-3" style={{ height: '50px', objectFit: 'contain' }} src={`data:image/png;base64,${image.img}`} />
                <h4>{service}</h4>
                <p className="text-secondary" style={{ fontSize: '13px' }}>{description}</p>
                <small>{key}</small>
            </div>
        </Link>
    );
};

export default Service;