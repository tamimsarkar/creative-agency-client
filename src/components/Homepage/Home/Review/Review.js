import React, { useEffect } from 'react';
import { useState } from 'react';
import './Review.css'
const Review = () => {
    const [reviews, setReviews] = useState([])
useEffect(() => {
    fetch('https://fast-falls-01927.herokuapp.com/reviews')
    .then(res => res.json())
    .then(data => setReviews(data))
  
}, [])
    return (
        <div className="reviews m-4">
            <h4 className="text-center mt-4 ">Clients <br /> <span style={{ color: '#7AB259' }}>Feedback</span></h4>
            <div className="container mt-5">
                <div className="row">
                    {
                        reviews.map(review => (
                            <div key={review._id} className="col-md-4 mt-4 review__card">
                                <div>
                                    <div className="card__top__info">
                                        <img style={{height:'50px',objectFit:'contain',borderRadius:'50%'}}    src={review.photo} alt="reviewer"/>
                                        <div>
                                            <h6>{review.name}</h6>
                                            <p><small>{review.companyName}</small></p>
                                        </div>
                                    </div>
                                    <small className="review__des text-secondary">{review.description}</small>
                                </div>
                            </div>
                        ))
                    }
                </div>
                
            </div>
        </div>
    );
};

export default Review;