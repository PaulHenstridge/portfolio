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
    height: min-content;
    z-index:6;
    margin-bottom:2rem;
    display:flex;
    @media(max-width:650px){
        flex-direction:column;
        height:min-content;
    }
    justify-content: space-between;
    background: rgba(255, 255, 255, 0.22);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(3.6px);
    -webkit-backdrop-filter: blur(3.6px);
    background-color:rgb(5,5,5,0.5);

    & > img{
        max-width: 40%; 
        aspect-ratio:1;
        @media(max-width:650px){
            max-width:80%;
            max-height:80%;
            margin:0 auto;
        }
        /* min-width:50%; */
        /* height: auto; */
        padding:1rem;
    }

    & > p {
        padding: 2rem;
        font-size: 0.8rem;
        color:rgb(221, 248, 251);
        text-shadow:0px 0px 6px black;
        

        @media(max-width:650px){    
            order:1;
        }
        
        @media (min-width:580px) {
            font-size:0.8rem;
        }
        @media (min-width:800px) {
            font-size:1rem;
        }
        @media (min-width:1040px) {
        font-size:1.2rem;
        }
        @media (min-width:1880px) {
            font-size:1.6rem;
        }  

        & > h3{
            margin-bottom:1rem;
            font-family: 'Roboto Slab', serif;
            text-decoration:underline;
        }

        & > a{
            padding:0.8rem 1.4rem;
            background-color: rgb(13, 20, 34);
        }
    }
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
  
               <p> <h3> <strong>A Voice Controlled, AI Supported, Accessibility Assistant   </strong></h3>

               Designed to support visually impaired and neurodivergent users with voice and keyboard commands,
                and AI integrated support.<br></br>
               Users can interact with the app via natural language voice commands.<br></br><br></br>
            
               React, Express, GPT3.5, Postgres DB with Java Spring<br></br><br></br>
               <a href='https://github.com/PaulHenstridge/SpeakEasy-AI-A11y-Assistant'>View Code  <i className='devicon-github-original'></i></a>

               </p>

 
        </ProjectPanel>
        <ProjectPanel>
            <p><h3> <strong>A Classic 'Fruit Machine' Simulator.   </strong></h3>
            
            A group project, built with React, Express and MongoDB.<br></br><br></br><br></br>
                <a href='https://github.com/PaulHenstridge/Crazy-Jackpots'>View Code  <i className='devicon-github-original'></i></a>
            </p>
            <img src={slot} alt="Slot machine user interface" />
        </ProjectPanel>
        <ProjectPanel>
            <img src={knotty} alt="knotty league teams page" />
            <p><h3> <strong> Modelling of a Sports League   </strong></h3>
                
                Users can schedule matches and run a simulation of the match being played, generating a score and match report.
                Results are displayed in a league table.<br></br><br></br>
                Admin can create and delete teams, and edit attributes.<br></br>
                Built with Python, Flask and PostgreSQL.<br></br><br></br><br></br>
                <a href='https://github.com/PaulHenstridge/knotty_league'>View Code  <i className='devicon-github-original'></i></a>

                </p>
        </ProjectPanel>
        <ProjectPanel>
            <p><h3> <strong> Musical Loop Generator   </strong></h3>
                Users can select the key, octave, synth type, tempo and number of simultaneously looping channels to create their track.<br></br>
                Built with Vanilla JS and the Tone.js library<br></br><br></br><br></br>
                <a href='https://github.com/PaulHenstridge/loop-sequencer'>View Code  <i className='devicon-github-original'></i></a></p>
            <img src={sequencer} alt="tone selection interface" />
        </ProjectPanel>


        <PageScroll to="experience" />
    </ProjectsContainer>);
}

export default Projects;