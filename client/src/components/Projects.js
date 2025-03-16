import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

import styled from "styled-components";
import PageScroll from "./PageScroll";
import hillPath from "../assets/Hillpath.jpg"
import knotty from "../assets/knotty.png"
import speakeasy from "../assets/speakeasy.png"
import quincy from "../assets/quincy_api.png"
import yahtzee from "../assets/yahtzee.png"



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
            text-decoration:none;
        }
    }
`

const Projects = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const topRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
         if (location.pathname.startsWith('/projects/') && topRef.current) {
          topRef.current.scrollIntoView();
        }
      }, [location]); // This effect runs when the route changes

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


    return (
    <ProjectsContainer id="projects" >
        <div ref={topRef}></div>
        <ProjectPanel>
            <img src={speakeasy} alt="speakeasy home page" />
  
     <p>           <h3> <strong>A Voice Controlled, AI Supported, Accessibility Assistant   </strong></h3>

               This 2023 bootcamp capstone project explored the possibilities of AI in assisting users to interact with technology on their own terms.
               I also investigated how AI might be used and manipulated to do things beyond its defined scope.  I building the project I explored the practicalities and 
               design considerations of accesability in the digital world.
               
               The application can support visually impaired and neurodivergent users to interact with their computers, in predefined ways, with keyboard and voice commands,
               using natural speech patterns.<br></br>
              <br></br><br></br>
            
               React, Express, GPT3.5, Postgres DB with Java Spring<br></br><br></br>
               <Link to="/projects/speakeasy">Learn More</Link>
               <a href='https://github.com/PaulHenstridge/SpeakEasy-AI-A11y-Assistant'>View Code  <i className='devicon-github-original'></i></a>

               </p>
        </ProjectPanel>

        <ProjectPanel>
            <p><h3> <strong>Quincy API </strong></h3>
            
            An API serving software development links and resources. <br></br><br></br>
            AI generated content tags for in depth searching.  A simple front end to test API and view results.
            Content originally shared by Quincy Larson (freeCodeCamp) weekly emails.
            <br></br><br></br>
            Python, Flask, MongoDB, JavaScript, GPT3.5, BeautifulSoup
            <br></br><br></br>
                <Link to="/projects/quincy">Learn More</Link>
                <a href='https://github.com/PaulHenstridge/Quincy_API'>View Code  <i className='devicon-github-original'></i></a>
            </p>
            <img src={quincy} alt="API front end and endpoints" />
        </ProjectPanel>

        <ProjectPanel>
            <img src={knotty} alt="knotty league teams page" />
            <p><h3> <strong> Knotty Championship Manager   </strong></h3>
                
                League management simulator.  Full Stack app with Python, Flask, and PostgreSQL<br></br><br></br>
                Create a team, buy and sell players, play in matches and tournaments, and compete in the league!
                <br></br><br></br><br></br>
                <Link to="/projects/knotty">Learn More</Link>

                <a href='https://github.com/PaulHenstridge/knotty_league'>View Code  <i className='devicon-github-original'></i></a>

                </p>
        </ProjectPanel>

        <ProjectPanel>
            <p><h3> <strong> Yahtzee  </strong></h3>

            The classic dice game "Yahtzee", built with Java, playable through a Java Swing GUI.  The project follows the M-V-VM pattern
           and adheres to SOLID principles.<br></br><br></br><br></br>
           <Link to="/projects/yahtzee">Learn More</Link>
            <a href='https://github.com/PaulHenstridge/JavaYahtzee'>View Code  <i className='devicon-github-original'></i></a></p>
                
               

            <img src={yahtzee} alt="Yahtzee GUI" />
        </ProjectPanel>


        <PageScroll to="experience" />
    </ProjectsContainer>);
}

export default Projects;