import React from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_clmkxv9', 'template_uusgzlb', form.current, 'dmROKhjJgKoFwMbYE')
        e.target.rest()
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();

    };

    return (
        <div id='contact' className="lg:my-28 my-10">
            <div className='text-center lg:mb-28 mb-10'>
                <h2 className='text-5xl font-bold'><span className='text-primary'>Contact</span> Me</h2>
            </div>
            <div className="hero-content flex-col lg:flex-row gap-10 justify-evenly">
                <div className="text-center lg:text-left">
                    <h1 className="text-2xl font-bold">Personal Info</h1>
                    <p className="pt-6 font-bold">Email: <span className='text-primary'>abukawsar47ak@gmail.com</span></p>
                    <p className="pt-6 font-bold">Phone: <span className='text-primary'>01307102810</span></p>
                    <p className="pt-6 font-bold">Email: <span className='text-primary'>abukawsar47ak@gmail.com</span></p>
                    <p className="py-6 font-bold">Address: <span className='text-primary'>Mirpur-2, Dhaka, Bangladesh</span></p>
                </div>
                <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
                    <form
                        ref={form}
                        onSubmit={sendEmail}
                        className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Full Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Subject</span>
                            </label>
                            <input type="text" name="subject" placeholder="Subject" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Message</span>
                            </label>
                            <textarea type="text" name="message" placeholder="Message" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary font-bold text-white">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;