import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetail = () => {
    const { projectId } = useParams();



    return (
        <section className='lg:min-h-screen py-10 px-2'>
            {projectId}
        </section>
    );
};

export default ProjectDetail;