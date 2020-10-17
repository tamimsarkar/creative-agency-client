import React, { useState } from 'react';

const MakeAdmin = () => {
    const [info, setInfo] = useState({});
    

    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

  

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData()
        console.log(info);
        formData.append('email', info.email);
      
        fetch('https://fast-falls-01927.herokuapp.com/addAdmin', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(success => {
                if (success) {
                    console.log(success)
                    alert("YAY! You just added an admin")
                 
                }
            })
            .catch(error => {
                alert(error.message)
            })
    }
    return (
        <div className="container make__admin">
           <form className="d-flex flex-column justify-content-center m-5" onSubmit={handleSubmit}>
                    <div >
                    <h6>Email</h6>
                    </div>
                    <div>

                    <input style={{width:'280px',marginRight:'10px',height:'36px'}} onBlur={handleBlur} type="text" name="email" placeholder="john@gmail.com" />
                    <button style={{height:'36px',position:'absolute'}} type="submit" className="btn btn-success">Send</button>   
                    </div>
                    </form>
        </div>
    );
};

export default MakeAdmin;