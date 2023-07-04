import './App.css';

import React, { useState, useEffect, useSyncExternalStore } from 'react';

import Waiting from './components/Waiting';
import HeroHeader from './components/HeroHeader';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Experience from './components/Experience';
import ScrollNav from './components/ScrollNav';

function App() {

    const [showNav, setShowNav] = useState(false);

    useEffect(() => {
        const handleScroll = () => { // Hero is 100vh height, when scroll goes beyond, update state.
            setShowNav(window.scrollY > window.innerHeight / 2);
        }

        window.addEventListener('scroll', handleScroll);

        // Clean up function
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount


    return (

        <div className="App">
            {<ScrollNav show={showNav} />}
            <HeroHeader />
            <AboutMe />
            <Projects />
            <Experience />
            <Contact />
        </div>
    );
}

export default App;
