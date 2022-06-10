import React from 'react';
import { useNavigate } from 'react-router-dom';

const Project = ({ project }) => {
    const navigate = useNavigate();

    const navigateToCarDetail = id => {
        navigate(`/project/${id}`);
    }

    return (
        <div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={project?.img.main} alt="car" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2
                        className="card-title text-2xl font-bold text-primary"
                    >{project?.name}</h2>
                    <h2 className="card-title">{project?.title}</h2>
                    <a className='btn btn-link font-bold' href={project?.live_link} target="_blank">Live Link</a>
                    <div className='flex justify-evenly'>
                        <a className='btn btn-xs btn-link font-bold' href={project?.code?.client} target="_blank">Code Link (Client)</a>
                        <a className='btn btn-xs btn-link font-bold' href={project?.code?.server} target="_blank">Code Link (Server)</a>
                    </div>
                </div>
                <button onClick={() => navigateToCarDetail(project?._id)} className='btn btn-primary text-white'>Read More</button>
            </div>
        </div>
    );
};

export default Project;