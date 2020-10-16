import React from 'react';
import headerImg from '../../../../../images/logos/Frame.png';
import './HeaderMiddle.css'
const HeaderMiddle = () => {
    return (
        <section className='header__middle'>
            <div className="container">
        <div className="row align-items-center">
            
            <div className="col-md-6">
               <div>
               <h1>Let’s Grow Your <br/> Brand To The <br/> Next Level</h1>
               <p className="des">Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. Purus commodo ipsum duis <br/> laoreet maecenas. Feugiat </p>
                <button className='hire__button btn'>Hire us</button>
               </div>
            </div>
            <div className="col-md-6">
                <img className='img-fluid' src={headerImg} alt=""/>
            </div>
        </div>
        </div>
      
        </section>
    );
};

export default HeaderMiddle;