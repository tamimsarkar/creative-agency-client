import React from 'react';
import airbnb from '../../../../images/logos/airbnb.png'
import slack from '../../../../images/logos/slack.png'
import uber from '../../../../images/logos/uber.png'
import google from '../../../../images/logos/google.png'
import netflix from '../../../../images/logos/netflix.png'
import './Companies.css'
const Companies = () => {
    return (
        <div className="container companies m-auto pt-5 pb-5">
        <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-2 col-sm-6 ">
             
                    <img className="company__logo" src={slack} alt=""/>
             
            </div>

            <div className="col-md-2 col-sm-6">
      
                    <img className="company__logo" src={google} alt=""/>
            
            </div>

            <div className="col-md-2 col-sm-6">
              
                    <img className="img-fluid company__logo" src={uber} alt=""/>
              
            </div>

            <div className="col-md-2 col-sm-6">
               
                    <img className="company__logo" src={netflix} alt=""/>
               
            </div>

            <div className="col-md-2 col-sm-6">
               
                    <img className="company__logo" src={airbnb} alt=""/>
          
            </div>
            <div className="col-md-1"></div>
        </div>
        </div>
    );
};

export default Companies;