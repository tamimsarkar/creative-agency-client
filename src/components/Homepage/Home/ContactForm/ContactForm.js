import React from 'react';
import { useForm } from "react-hook-form";
import './ContactForm.css'
const ContactForm = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <section className="contact">
            <div className="container m-auto">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h3>Let us handle your <br /> project, professionally.</h3>
                        <p><small>With well written codes, we build amazing apps for all <br /> projectsplatforms, mobile and web apps in general.</small></p>
                    </div>
                    <div className="col-md-6">
                        <div>
                        <form className='contact__form' onSubmit={handleSubmit(onSubmit)}>
                            {/* register your input into the hook by invoking the "register" function */}
                            <input type="text" placeholder="Your Name" name="exampleRequired" ref={register} />
                            {errors.exampleRequired && <span>This field is required</span>}
                            {/* include validation with required or other standard HTML validation rules */}
                            <input type="email" placeholder="Your Email Address" name="exampleRequired" ref={register({ required: true })} />
                            {/* errors will return when field validation fails  */}
                            {errors.exampleRequired && <span>This field is required</span>}
                            <input className="message__input" type="text" placeholder="Your Message" name="exampleRequired" ref={register({ required: true })} />
                            {/* errors will return when field validation fails  */}
                            {errors.exampleRequired && <span>This field is required</span>}
                           


                            <button className="btn send__button" type="submit" >Send</button>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;