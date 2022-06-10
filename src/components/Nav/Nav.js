import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {



    const menuItems = <>
        {/* <li><Link to="/">Home</Link></li> */}
        <li><Link to="/home">Home</Link></li>
        <li><a href="/home#skill">Skills</a></li>
        <li><a href="/home#project">Projects</a></li>
        <li><Link to="/blog">Blogs</Link></li>
        <li><a href="/home#contact">Contact</a></li>

    </>
    return (
        <div className='sticky top-0 bg-white z-40 drop-shadow-xl '>
            <div className="navbar bg-base-30 max-w-7xl mx-auto px-12 ">
                <div className="lg:navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <a href='/' className="normal-case text-2xl font-bold active:bg-primary"><span className='text-primary'>Abu </span>Kawsar</a>
                </div>
                <div className="lg:navbar-end hidden lg:flex min-w-fit">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};


export default Nav;