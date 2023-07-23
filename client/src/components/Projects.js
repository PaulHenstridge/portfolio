import React, { useState, useEffect } from 'react';

import styled from "styled-components";
import PageScroll from "./PageScroll";
import hillPath from "../assets/Hillpath.jpg"
import knotty from "../assets/knotty.png"
import speakeasy from "../assets/speakeasy.png"
import slot from "../assets/slot.png"
import sequencer from "../assets/sequencer.png"


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
    margin-bottom:2rem;
    display:flex;
    justify-content: space-between;
    & > img{
        width: 100%;
        max-width: 25%; 
        min-width:50%;
        height: auto;
        padding:1rem;
    }

    & > p {
        padding: 2rem;
        font-size: 1.6rem;
        
    }


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
        <ProjectPanel>
            <img src={speakeasy} alt="speakeasy home page" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, ullam modi fuga recusandae aut quisquam excepturi vero. Explicabo iste autem eaque voluptate dicta rem, eligendi nobis quos tenetur a assumenda ex temporibus enim sequi sed alias minima laudantium optio commodi nostrum distinctio minus magnam.</p>
        </ProjectPanel>
        <ProjectPanel>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, ullam modi fuga recusandae aut quisquam excepturi vero. Explicabo iste autem eaque voluptate dicta rem, eligendi nobis quos tenetur a assumenda ex temporibus enim sequi sed alias minima laudantium optio commodi nostrum distinctio minus magnam.</p>
            <img src={slot} alt="Slot machine user interface" />
        </ProjectPanel>
        <ProjectPanel>
            <img src={knotty} alt="knotty league teams page" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, ullam modi fuga recusandae aut quisquam excepturi vero. Explicabo iste autem eaque voluptate dicta rem, eligendi nobis quos tenetur a assumenda ex temporibus enim sequi sed alias minima laudantium optio commodi nostrum distinctio minus magnam.</p>
        </ProjectPanel>
        <ProjectPanel>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, ullam modi fuga recusandae aut quisquam excepturi vero. Explicabo iste autem eaque voluptate dicta rem, eligendi nobis quos tenetur a assumenda ex temporibus enim sequi sed alias minima laudantium optio commodi nostrum distinctio minus magnam.</p>
            <img src={sequencer} alt="tone selection interface" />
        </ProjectPanel>


        <PageScroll to="experience" />
    </ProjectsContainer>);
}

export default Projects;