import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import { ServiceContext, UserContext } from '../../../App';
import './Orders.css'
const Orders = () => {
    const history = useHistory()
    // context API
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [servicee, setServicee] = useContext(ServiceContext)

    //form INFO

    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = e => {
        const newInfo = { ...info, ...loggedInUser,...servicee };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData()
        console.log(info);
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('email', info.email);
        formData.append('service', info.service);
        formData.append('projectDetails', info.projectDetails);
        formData.append('description', info.description);
        formData.append('price', info.price);
        
        fetch('http://localhost:4000/addOrder', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(success => {
                if (success) {
                    console.log(success)
                    alert("YAHOO! Your order placed successfully.We will contact you very soon...")
                    history.push('/user-dashboard/ordered-services')

                }
            })
            .catch(error => {
                alert(error.message)
            })
    }
    return (
        <div className="orders">
            <div className="container">
                <h3 className="m-3" >Orders</h3>
            </div>
            <div className="ml-5">
                <form onSubmit={handleSubmit}>
                    <input style={{border: "none" , fontSize:'14px',height:'40px',width: "90%"}} onBlur={handleBlur} type="text" defaultValue={loggedInUser.name} className="form-control" name="name" placeholder="Your Name / Company Name" />
                    <input style={{border: "none", fontSize:'14px',height:'40px' ,width: "90%"}} onBlur={handleBlur} type="email" defaultValue={loggedInUser.email} className="form-control" name="email" placeholder="Enter email address" />
                    <input style={{border: "none", fontSize:'14px',height:'40px' ,width: "90%"}} onBlur={handleBlur} type="text" defaultValue={servicee.service} className="form-control" name="service" placeholder="Enter service" />
                    <textarea style={{  width: "90%", fontSize:'14px'}} onBlur={handleBlur} type="text" className="form-control" name="projectDetails" placeholder="Project Details" height="100px"  />
                    <div style={{display: 'flex' , flexDirection:'row'}}>
                        <input style={{border: "none", fontSize:'14px',height:'40px' ,width: "90%"}} onBlur={handleBlur} type="text" className="form-control" name="price" placeholder="price"/>
                        <input style={{border: "none", fontSize:'14px',height:'40px' ,width: "90%"}} onBlur={handleBlur} type="text" className="form-control" defaultValue={servicee.description} style={{display:"none"}} name="description" placeholder="des"/>
                    <input style={{border: "none", fontSize:'14px' ,width: "90%" }} onChange={handleFileChange} type="file" className="form-control ml-1" id="exampleInputPassword1" placeholder="Picture" />
                    </div>
                    <button type="submit" className="btn btn-success">Send</button>
                </form>
            </div>
        </div>
    );
};

export default Orders;