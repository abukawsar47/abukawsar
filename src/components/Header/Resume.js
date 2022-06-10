import React from 'react';
import MyResume from '../../assets/Abu_Kawsar_Frontend_Resume.pdf'

const Resume = () => {
    return (
        <div>
            <a className='btn btn-primary font-bold text-white' href={MyResume} download>Download Resume</a>
        </div>
    );
};

export default Resume;