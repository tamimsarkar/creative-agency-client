import React from 'react';
import './Slider.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import carousel1 from '../../../../images/carousel-1.png'
import carousel2 from '../../../../images/carousel-2.png'
import carousel3 from '../../../../images/carousel-3.png'
import carousel4 from '../../../../images/carousel-4.png'
import carousel5 from '../../../../images/carousel-5.png'
const Slider = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <section className='mt-5 carousel'>
            <h3 className='text-center text-white mb-4'>Here are some of <span style={{ color: '#7AB259' }}> our works</span></h3>
            <div className='container'>
                <Carousel
                  responsive={responsive}
                >
                    <div className='slide'>
                        <img className="slide__img" src={carousel1} alt="" />
                    </div>
                    <div className='slide'>
                        <img className="slide__img" src={carousel2} alt="" />
                    </div>
                    <div className='slide'>
                        <img className="slide__img" src={carousel3} alt="" />
                    </div>
                    <div className='slide'>
                        <img className="slide__img" src={carousel4} alt="" />
                    </div>
                    <div className='slide'>
                        <img className="slide__img" src={carousel5} alt="" />
                    </div>
                </Carousel>;
            </div>
        </section>
    );
};

export default Slider;