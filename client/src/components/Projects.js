import React, { useState, useEffect } from 'react';

import styled from "styled-components";
import PageScroll from "./PageScroll";
import hillPath from "../assets/Hillpath.jpg"

const ProjectsContainer = styled.section`
    min-height: 120vh;
    background-color:rgb(13, 20, 34);
    background-image:url(${hillPath});
    background-position:center;
    background-repeat:no-repeat;
    background-attachment:fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 8rem 0;
`
const ProjectPanel = styled.article`
    width:80%;
    height: 40vh;
    z-index:6;
    margin-bottom:1rem;

background: rgba(255, 255, 255, 0.22);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(3.6px);
-webkit-backdrop-filter: blur(3.6px);

`

const Projects = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setScrollPosition(scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const bgPosition = `50% calc(80% - ${scrollPosition * 0.5}px)`;


    return (<ProjectsContainer id="projects"  >
        <ProjectPanel></ProjectPanel>
        <ProjectPanel></ProjectPanel>
        <ProjectPanel></ProjectPanel>
        <ProjectPanel></ProjectPanel>


        <PageScroll to="experience" />
    </ProjectsContainer>);
}

export default Projects;