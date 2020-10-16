import React from 'react';
import { Route,Link,BrowserRouter as Router } from 'react-router-dom';
import OrderedServices from '../AdminDashboard/OrderedServices/OrderedServices';
import Orders from '../AdminDashboard/Orders/Orders';
import logo from '../../images/logos/logo.png'
import './UserDashboard.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart,faList, faCommentAlt} from '@fortawesome/free-solid-svg-icons'
const UserDashboard = () => {
    return (
        <div>
            <div className="logo_area">
                <Link to="/"><img className="dashboard__logo" src={logo} alt=""/></Link>
            </div>
        <div className="user__dashboard">
          
        </div>
        </div>
    );
};

export default UserDashboard;