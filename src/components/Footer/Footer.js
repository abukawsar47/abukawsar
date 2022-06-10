import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (

        <footer className='text-center bg-accent text-white py-4'>
            <p className='m-0'><small>Copyright &copy; {year} All Rights Reserved</small></p>
        </footer >
    );
};

export default Footer;