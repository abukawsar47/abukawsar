import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';



const Home = () => {
    return (
        <div>
            <Header />
            <AboutMe />
            <Skills />
            <Projects />
            <Contact />
        </div>
    );
};

export default Home;