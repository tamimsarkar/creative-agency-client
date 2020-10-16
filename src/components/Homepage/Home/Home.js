import React from 'react';
import Companies from './Companies/Companies';
import ContactForm from './ContactForm/ContactForm';
import Header from './Header/Header';
import './Home.css'
import Review from './Review/Review';
import Services from './Services/Services';
import Slider from './Sliders/Slider';
const Home = () => {
    return (
        <div className="home">
            <Header />
            <Companies />
            <Services />
            <Slider />
            <Review />
            <ContactForm />
        </div>
    );
};

export default Home;