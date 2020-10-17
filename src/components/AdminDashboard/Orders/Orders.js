import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useHistory } from 'react-router-dom';
import { ServiceContext, UserContext } from '../../../App';
import './Orders.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons'

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
        formData.append('serviceImg', info.serviceImg);
        formData.append('projectDetails', info.projectDetails);
        formData.append('description', info.description);
        formData.append('price', info.price);
        
        fetch('https://fast-falls-01927.herokuapp.com/addOrder', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(success => {
                if (success) {
                    console.log(success)
                    alert("YAY! Your order placed successfully.We will contact you very soon...")
                    history.push('/admin-dashboard/ordered-services')

                }
            })
            .catch(error => {
                alert("Submit all of these form and upload an image",)
                console.log(error)
            })
    }
    return (
        <div className="orders">
            <div className="container">
                <h3 className="m-3" >Orders</h3>
            </div>
            {
                loggedInUser.name ? <div className="ml-5 w-100">
                <form onSubmit={handleSubmit}>
                    <input style={{border: "none" , fontSize:'14px',height:'40px',width: "100%"}} onBlur={handleBlur} type="text" defaultValue={loggedInUser.name} className="form-control" name="name" placeholder="Your Name / Company Name" />
                    <input style={{border: "none", fontSize:'14px',height:'40px' ,width: "100%"}} onBlur={handleBlur} type="email" defaultValue={loggedInUser.email} className="form-control" name="email" placeholder="Enter email address" />
                    <input style={{border: "none", fontSize:'14px',height:'40px' ,width: "100%"}} onBlur={handleBlur} type="text" defaultValue={servicee.service} className="form-control" name="service" placeholder="Enter service" />
                    <img style={{display:"none"}} src={`data:image/png;base64,${servicee.image.img}`} alt=""/>
                    <textarea style={{  width: "100%", fontSize:'14px'}} onBlur={handleBlur} type="text" className="form-control" name="projectDetails" placeholder="Project Details" height="100px"  />
                    <div style={{display: 'flex' , flexDirection:'row' ,justifyContent:'space-between'}}>
                        <input style={{border: "none", fontSize:'14px',height:'40px', width: "50%"}} onBlur={handleBlur} type="text" className="form-control" name="price" placeholder="price"/>
                        <input style={{border: "none", fontSize:'14px',height:'40px' ,width: "100%"}} onBlur={handleBlur} type="text" className="form-control" defaultValue={servicee.description} style={{display:"none"}} name="description" placeholder="des"/>
                    <label className="custom-file-upload" > <FontAwesomeIcon  icon={faUpload} /> <span>Upload project file</span>
                    <input style={{border: "none", display:"none",  fontSize:'14px' ,width: "100%" }} onChange={handleFileChange} type="file"  className="file-upload form-control" id="exampleInputPassword1" placeholder="Picture" />
                    </label>
                   
                    </div>
                    <button type="submit" className="btn submit">Send</button>
                </form>
            </div> : <h3>Please Login First</h3>
            }
        </div>
    );
};

export default Orders;