import './App.css';

import React, { useState, useEffect, useSyncExternalStore } from 'react';
import styled from "styled-components"
import HeroHeader from './components/HeroHeader';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Experience from './components/Experience';
import ScrollNav from './components/ScrollNav';
import Footer from './components/Footer';
import StaticContact from './components/StaticContact';

const MaxWidthContainer = styled.div`
    max-width:1200px;
    margin: 0 auto;
`

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
    }, []); 


    return (

        <div className="App">
            {<ScrollNav show={showNav} />}
            <MaxWidthContainer>
                <HeroHeader />
                <AboutMe />
                <Projects />
                <Experience />
                <StaticContact />
                {/* <Contact/> */}
                <Footer />
            </MaxWidthContainer>

        </div>
    );
}

export default App;
