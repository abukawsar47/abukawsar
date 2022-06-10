import React from 'react';
import './Header.css'
// import profilePic from '../../assets/abu-1.jpg'
import { BsLinkedin, BsGithub } from "react-icons/bs";
import Resume from './Resume';

const Header = () => {
    return (
        <div id='home' className="lg:my-28 my-10">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <div className="avatar mb-6">
                        <div className=" w-64 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://i.ibb.co/9Yb72DV/abu-1.jpg" alt="" />
                        </div>
                    </div>
                    <h1 className="text-5xl font-bold ">Abu Kawsar</h1>
                    <p className='font-bold my-6'>Full Stack Web-Developer || MERN Stack Web Developer <br /> Frontend Web Developer (ReactJs)</p>

                    <div className='flex align-middle justify-center mb-6 gap-4 '>

                        <a className='social hover:text-primary duration-500' href="https://www.linkedin.com/in/abu-kawsar-10118b228/" target='_blank'><BsLinkedin /></a>

                        <a className='social hover:text-primary duration-500' href="https://github.com/abukawsar47" target='_blank'><BsGithub /></a>
                    </div>

                    <Resume />
                </div>
            </div>
        </div>
    );
};

export default Header;