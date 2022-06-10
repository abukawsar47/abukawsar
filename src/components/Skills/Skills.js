import React from 'react';
import './Skills.css'

const Skills = () => {
    return (
        <div id='skill' className='lg:my-28 my-10'>
            <div className='text-center lg:mb-10 mb-10'>
                <h2 className='text-5xl font-bold'><span className='text-primary'>My</span> Skills</h2>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-center">

                <div className="fd-content">
                    <img src="https://i.ibb.co/HTVtqR1/html.png" alt="" />
                    <h4>HTML5</h4>
                </div>
                <div className="fd-content">
                    <img src="https://i.ibb.co/16gm1fP/css.png" alt="" />
                    <h4>CSS3</h4>
                </div>
                <div className="fd-content">
                    <img src="https://i.ibb.co/NT4LSwD/js.png" alt="" />
                    <h4>JavaScript</h4>
                </div>
                <div className="fd-content">
                    <img src="https://i.ibb.co/NLkMRrN/bootstrap.png" alt="" />
                    <h4>Bootstrap</h4>
                </div>
                <div className="fd-content">
                    <img src="https://i.ibb.co/0ncL0Cv/tailwind.png" alt="" />
                    <h4>Tailwind</h4>
                </div>
                <div className="fd-content">
                    <img src="https://i.ibb.co/DWYRDc6/react.png" alt="" />
                    <h4>React</h4>
                </div>
                <div className="fd-content">
                    <img src="https://i.ibb.co/wpGR00z/node.png" alt="" />
                    <h4>Node JS</h4>
                </div>
                <div className="fd-content">
                    <img src="https://i.ibb.co/hK8dq7R/mongodb.png" alt="" />
                    <h4>Mongo DB</h4>
                </div>
                <div className="fd-content">
                    <img src="https://i.ibb.co/yXLMKf7/express.png" alt="" />
                    <h4>Express JS</h4>
                </div>
                <div className="fd-content">
                    <img src="https://i.ibb.co/C743X79/github.png" alt="" />
                    <h4>GitHub</h4>
                </div>
                <div className="fd-content">
                    <img src="https://i.ibb.co/9WwzrvC/firebase.png" alt="" />
                    <h4>Firebase</h4>
                </div>
                <div className="fd-content">
                    <img src="https://i.ibb.co/2gXHw5z/images.png" alt="" />
                    <h4>Heroku</h4>
                </div>
            </div>
        </div>
    );
};

export default Skills;