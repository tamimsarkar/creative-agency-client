import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Review.css'
const AddReview = () => {
    const history = useHistory()
    // context API
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
 

    //form INFO

    const [info, setInfo] = useState({});
    

    const handleBlur = e => {
        const newInfo = { ...info, ...loggedInUser };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

  

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData()
        console.log(info);
        
        formData.append('name', info.name);
        formData.append('companyName', info.companyName);
        formData.append('photo', info.photo);
        formData.append('description', info.description);
       
        fetch('https://fast-falls-01927.herokuapp.com/addReview', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(success => {
                if (success) {
                    console.log(success)
                    alert("YAY! You just give a review.Check this out on Homepage.")
                    history.push('/home')

                }
            })
            .catch(error => {
                alert(error.message)
            })
    }
    return (

      
    <div className="container">
        {
            loggedInUser.name ?   <div>
            <h3 className="m-3">Give a review</h3>
             <form className="d-flex flex-column m-4" onSubmit={handleSubmit}>
                         <input onBlur={handleBlur} type="text" defaultValue={loggedInUser.name}  name="name" placeholder="Enter Name" />
                         <input onBlur={handleBlur} type="text" name="companyName" placeholder="Your Company Name.designation" />
                         <input onBlur={handleBlur} style={{display:'none'}} type="text" defaultValue={loggedInUser.photo} className="form-control" name="photo"  />
                         <textarea onBlur={handleBlur} type="text"  name="description" placeholder="Description" height="100px" placeholder="Description" />
                        
                         <button style={{width:'150px',backgroundColor:'#111430'}} type="submit" className="btn btn-success">Send</button>   
                         </form>
            </div> :
            <h3>Please Log in First...</h3>
        }
     
      
    </div>


    );
};

export default AddReview;