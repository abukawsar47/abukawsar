import React from 'react';
// import about from '../../assets/about.png'

const AboutMe = () => {
    return (
        <div className=' lg:my-28 my-10'>
            <div className='text-center lg:mb-8 mb-2'>
                <h2 className='text-5xl font-bold'><span className='text-primary'>About</span> Me</h2>
            </div>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row gap-10 justify-evenly">
                    <img src='https://i.ibb.co/wKMLY9x/about.png' className="lg:max-w-lg w-full rounded-lg" alt='' />
                    <div className='md:text-left text-center '>
                        <p className="font-bold mb-3">Name:  <span className='text-primary'> Abu Kawsar</span></p>
                        <p className="font-bold mb-3">Age: <span className='text-primary'>20+</span>  </p>
                        <p className="font-bold mb-3">Qualification: <span className='text-primary'> Business Studies (HSC)</span> </p>
                        <p className="font-bold mb-3">Post:  <span className='text-primary'>Jr. Frontend Developer</span> </p>
                        <p className="font-bold mb-3">Experience:  <span className='text-primary'>Fresher</span> </p>
                        <p className=" mb-3">I'm a fresher developer. I've been learning web development for one year. Recently I completed a web development(MERN Stack) course from Programming Hero.</p>
                        <p>During my web developer course, I developed numerous skills and strengthened my existing abilities. My web dev course developed my aptitude with object-oriented programming, HTML5, CSS3,GitHub,Responsive Layout, Bootstrap, TailwindCSS, javaScript, ES6,API,ReactJs, Firebase,NodeJs,MongoDB, and Heroku among other areas.</p>
                        <a href='#contact' className='btn btn-primary font-bold text-white mt-4'>Let's Talk</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;