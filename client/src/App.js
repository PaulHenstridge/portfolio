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
import SpeakeasyInfo from './components/projectPages/SpeakeasyInfo';
import QuincyInfo from './components/projectPages/QuincyInfo';
import KnottyInfo from './components/projectPages/KnottyInfo';
import YahtzeeInfo from './components/projectPages/YahtzeeInfo';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
            <Router> 
                {<ScrollNav show={showNav} />}
                <MaxWidthContainer>
                <HeroHeader />
                <AboutMe />
                <Routes>
                    <Route path="/" element={<Projects />} />
                    <Route path="/projects/speakeasy" element={<SpeakeasyInfo />} />
                    <Route path="/projects/quincy" element={<QuincyInfo />} />
                    <Route path="/projects/knotty" element={<KnottyInfo />} />
                    <Route path="/projects/yahtzee" element={<YahtzeeInfo />} />
                </Routes>
                {/* <Projects /> */}
                <Experience />
                <StaticContact />
                {/* <Contact/> */}
                <Footer />
                </MaxWidthContainer>
            </Router>
        </div>
    );
}

export default App;
