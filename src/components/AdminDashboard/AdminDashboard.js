import React, { useContext, useEffect } from 'react';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import logo from '../../images/logos/logo.png';
import AddService from './AddService/AddService';
import ServiceList from './ServiceList/ServiceList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faUserPlus, faList, faShoppingCart, faCommentAlt } from '@fortawesome/free-solid-svg-icons'
import Orders from './Orders/Orders';
import OrderedServices from './OrderedServices/OrderedServices';
import AddReview from './AddReview/AddReview';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import { useState } from 'react';
import { UserContext } from '../../App';

const AdminDashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [admin, setAdmin] = useState(false);

    useEffect(() => {
        fetch('http://localhost:4000/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setAdmin(data));
    }, [])
    return (
        <div>
            <div className="logo_area">
               <div className="d-flex justify-content-space-between">
               <Link to="/"><img  style={{height:'50px'}} className="dashboard__logo" src={logo} alt="" /></Link>
               <h6>{loggedInUser.name}</h6>
               </div>
            </div>
            <div className="user__dashboard">
                <Router>

                    <div className="sidebar">

                        <div className="sidebar__item">
                            {
                                admin ? <div style={{display: 'flex', flexDirection: 'column'}}> <Link className="side__item mt-2 mb-2" to="/admin-dashboard/service-list"> <FontAwesomeIcon icon={faList} />  Service List</Link>

                                    <Link className="side__item mt-2 mb-2" to='/admin-dashboard/add-service'> <FontAwesomeIcon icon={faPlus} /> Add Service</Link>

                                    <Link className="side__item mt-2 mb-2" to='/admin-dashboard/make-admin'> <FontAwesomeIcon icon={faUserPlus} /> Make Admin</Link>
                                </div> :

                                    <div style={{display: 'flex', flexDirection: 'column'}}>

                                        <Link className="side__item mt-2 mb-2" to="/admin-dashboard/orders">  <FontAwesomeIcon icon={faShoppingCart} /> Orders</Link>

                                        <Link className="side__item mt-2 mb-2" to='/admin-dashboard/ordered-services'> <FontAwesomeIcon icon={faList} />Ordered Service</Link>

                                        <Link className="side__item mt-2 mb-2" to='/admin-dashboard/review'> <FontAwesomeIcon icon={faCommentAlt} /> Review</Link>

                                    </div>
                            }

                        </div>
                    </div>

                    <div className="dashboard">

                        <Route path='/admin-dashboard/service-list'>
                            <ServiceList />
                        </Route>

                        <Route path='/admin-dashboard/add-service'>
                            <AddService />
                        </Route>


                        <Route path='/admin-dashboard/make-admin'>
                            <MakeAdmin />
                        </Route>


                        <Route path='/admin-dashboard/orders'>
                            <Orders />
                        </Route>

                        <Route path='/admin-dashboard/ordered-services'>
                            <OrderedServices />
                        </Route>


                        <Route path='/admin-dashboard/review'>
                            <AddReview />
                        </Route>

                    </div>

                </Router>

            </div>
        </div>
    );
};

export default AdminDashboard;