import React from 'react';
import { useState } from 'react';
import './AddService.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
const ServiceList = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = e => {
        const newInfo = { ...info };
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
        formData.append('service', info.service);
        formData.append('description', info.description);

        fetch('https://fast-falls-01927.herokuapp.com/addService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(success => {
                if (success) {
                    alert("YAHOO! Your service uploaded successfully...")

                }
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div>
            <h4 className="mt-3 ml-5">Add new service</h4>
            <div className="container m-5 p-5  ">


                <form className=" row flex-column form p-5" onSubmit={handleSubmit}>
                <div className="d-flex">
                    <div className="col-md-6 d-flex flex-column  ">
                        <small>Service title</small>
                        <input onBlur={handleBlur} type="text" name="service" placeholder="Enter service" id="exampleInputPassword1" />

                        <small>Description</small>
                        <textarea onBlur={handleBlur} type="text" className="form-control" name="description" placeholder="Description" height="150px" id="exampleInputPassword1" />


                    </div>
                    <div className="col-md-6 d-flex flex-column">
                        <small className="" htmlFor="exampleInputPassword1">Icon</small>

                        <label className="custom-file-upload service__image" > <FontAwesomeIcon  icon={faUpload} /> <span>Upload Image</span>
                        <input style={{border: "none", display:"none",  fontSize:'14px' ,width: "100%" }}  className="file-upload form-control" onChange={handleFileChange} type="file" id="exampleInputPassword1" />
                    
                    </label>
                    </div>
                    </div>

                    <button   type="submit" className="btn  custom_button ml-3 mt-2">Submit</button>
                </form>
            </div>
        </div>

    );
};

export default ServiceList;