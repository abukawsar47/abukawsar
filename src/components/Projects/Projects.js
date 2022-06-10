import React, { useEffect, useState } from 'react';
import Project from './Project';
/* import carD from '../../assets/carD.png'
import abu from '../../assets/abu.png'
import lub from '../../assets/lub.png'
import look from '../../assets/look.png' */

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('/project.json')
            .then(res => res.json())
            .then(data => setProjects(data));
    }, [])
    return (
        <div id='project' className='min-h-screen lg:my-28 my-10'>
            <h1 className='text-5xl font-bold  mb-10 text-center'><span className='text-primary '>My</span>  Projects</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center'>
                {
                    projects.map(project => <Project
                        key={project._id}
                        project={project}
                    ></Project>)
                }
            </div>
        </div >
        /*         <div id='project' className='min-h-screen lg:my-28 my-10'>
                    <h1 className='text-5xl font-bold  mb-10 text-center'><span className='text-primary '>My</span>  Projects</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5'>
                        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                            <div className="card-body">
                                <div className="items-center">
                                    <div className="avatar">
                                        <img src={look} alt="" />
                                    </div>
                                    <div className='text-center'>
                                        <h2 className='text-2xl font-bold'>Look UP</h2>
                                        <a href='https://assignment-12-lookup.web.app/' target='_blank' className='font-bold btn btn-link pl-0' >Live Link</a>
                                        <a href='https://github.com/abukawsar47/assignment-12-client-side' target='_blank' className='font-bold btn btn-link pl-0'>Code Client</a>
                                        <a href='https://github.com/abukawsar47/assignment-12-server-side' target='_blank' className='font-bold btn btn-link pl-0 pr-0'>Code Server</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                            <div className="card-body">
                                <div className="items-center">
                                    <div className="avatar">
                                        <img src={carD} alt="" />
                                    </div>
                                    <div className='text-center'>
                                        <h2 className='text-2xl font-bold'>Car Dealer</h2>
                                        <a href='https://assignment-11-client-side.web.app/' target='_blank' className='font-bold btn btn-link pl-0' >Live Link</a>
                                        <a href='https://github.com/abukawsar47/assignment-11-client-side' target='_blank' className='font-bold btn btn-link pl-0'>Code Client</a>
                                        <a href='https://github.com/abukawsar47/assignment-11-server-side' target='_blank' className='font-bold btn btn-link pl-0 pr-0'>Code Server</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                            <div className="card-body">
                                <div className="items-center">
                                    <div className="avatar">
                                        <img src={lub} alt="" />
                                    </div>
                                    <div className='text-center'>
                                        <h2 className='text-2xl font-bold'>Lub fit</h2>
                                        <a href='https://assignment-10-ak47.web.app/' target='_blank' className='font-bold btn btn-link' >Live Link</a>
                                        <a href='https://github.com/abukawsar47/assignment-10' target='_blank' className='font-bold btn btn-link'>Code Link</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                            <div className="card-body">
                                <div className="items-center">
                                    <div className="avatar">
                                        <img src={abu} alt="" />
                                    </div>
                                    <div className='text-center'>
                                        <h2 className='text-2xl font-bold'>Abu Sports</h2>
                                        <a href='https://abu-sports.netlify.app/' target='_blank' className='font-bold btn btn-link ' >Live Link</a>
                                        <a href='https://github.com/abukawsar47/assignment-11-client-side' target='_blank' className='font-bold btn btn-link'>Code Link</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */

    );
};

export default Projects;