import React, { useState } from 'react';

import styled, { css } from "styled-components";
// import ExpPanel from "./ExpPanel";
import { ExpData } from "../assets/ExpData";

import rmBg from "../assets/postbox-kutan-ural.jpg"
import ecoBg from "../assets/tomatoes-markus-spiske.jpg"
import ccBg from "../assets/CodeClan.png"

import PageScroll from "./PageScroll";

const ExperienceContainer = styled.section`
    position: relative;
    background-color: rgb(13, 20, 34);  
    height: 100vh;
    width: 100%;
    overflow: hidden;
    color:rgb(221, 248, 251);
    text-shadow:0px 0px 6px black;

`;

const sharedStyles = css`
  position: absolute;
  background-size: cover;
  background-position: right;
  transition: all 0.5s ease;
  cursor:pointer;
`;

const expandStyle = css`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index:3;
  transition: all 0.5s ease;
`;

const CCExp = styled.article`
    ${sharedStyles}
    top: 0;
    left: 0;
    width:100%;
    height: 50%;
    background-image: url(${ccBg});
    ${props => props.isExpanded && expandStyle};
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows:1fr 2fr 1fr;
    margin:auto;
   

    @media(max-width: 1363px) {
        background-position: ${props => props.isExpanded ? '75%' : 'right'};
    }

    @media(min-width: 1684px) {
        max-width:1684px;
        left:50%;
        transform:translateX(-50%);
    }
`
const CCHeadline = styled.h3`
    grid-column-start:2;
    grid-row-start:2;
    font-size: 4rem;
    color:rgb(13, 20, 34);
    text-shadow:0px 0px 5px rgb(221, 248, 251);
`
const CCText = styled.p`
    grid-row-start:2;
    grid-column-start:1;
    grid-column-end:4;
    font-size:1.2rem;
    background-color:rgb(5,5,5,0.5);
    padding:2rem;
    text-align:left;
    & > strong {
        text-decoration:underline;
    }
   
`


const RMExp = styled.article`
    ${sharedStyles}
    top: 50%;
    left: 0;
    width:50%;
    height: 50%;
    background-image: url(${rmBg});
    ${props => props.isExpanded && expandStyle};
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows:1fr 2fr 1fr;

    @media(min-width: 1684px) {
        max-width:842px;
        left:50%;
        transform:translateX(-100%);
    }

`
const RMHeadline = styled.h3`
    grid-column-start:2;
    grid-row-start:2;
    font-size: 3rem;
    color:rgb(13, 20, 34);
    text-shadow:0px 0px 5px rgb(221, 248, 251);
`
const RMText1 = styled.p`
    grid-row-start:2;
    font-size:1.2rem;
    background-color:rgb(5,5,5,0.5);
    text-align:left;
    padding:0.5rem;
`
const RMText2 = styled.p`
    grid-row-start:2;
    grid-column-start:3;
    font-size:1.2rem;
    background-color:rgb(5,5,5,0.5);
    text-align:left;
    padding:0.5rem;
`

const ECOExp = styled.article`
    ${sharedStyles}
    top: 50%;
    left: 50%;
    width:50%;
    height: 50%;
    background-image: url(${ecoBg});
    ${props => props.isExpanded && expandStyle};
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows:1fr 2fr 1fr;

    @media(min-width: 1684px) {
        max-width:842px;
        left:50%;
        
    }
`
const ECOHeadline = styled.h3`
    grid-column-start:2;
    grid-row-start:2;
    font-size: 3rem;
    color:rgb(13, 20, 34);
    text-shadow:0px 0px 5px rgb(221, 248, 251);
`
const ECOText = styled.p`
    grid-row-start:2;
    grid-column-start:2;
    font-size:1.2rem;
    background-color:rgb(5,5,5,0.5);
    text-align:left;
    padding:0.5rem;
`

const ScrollContainer = styled.div`
    display:flex;
    position:absolute;
    bottom:8rem;
    left:50%;
    transform: translateX(-50%);
`


const Experience = () => {
    const [expanded, setExpanded] = useState(null);

    const handleClick = (section) => {
        setExpanded(expanded === section ? null : section);
    }


    return (
    <ExperienceContainer id="experience" >
        <CCExp isExpanded={expanded === 'CCExp'} onClick={() => handleClick('CCExp')}>
            {expanded !== 'CCExp' && <CCHeadline>CodeClan_</CCHeadline>}
            {expanded === 'CCExp' && <CCText> 
                <h2> An intensive, immersive bootcamp led by experienced instructors, learning industry standard tools and methods</h2><br></br><br></br>
                <strong>Full Stack Applications</strong> - Using Python, JavaScript and Java, Flask, Express and Spring, MongoDB and PostgreSQL.<br></br><br></br>
                <strong>Collaborative working</strong> -  Pair Programming, group projects, Mob programming, 1-1 code reviews.<br></br><br></br>
                <strong>Agile development</strong> - Daily Standups, focus on delivering MVP, iterative development, regular review and redefining of objectives.<br></br><br></br>
                <strong>SOLID principles</strong> - Understanding of object-oriented design principles for creating maintainable, scalable, and extendable software architectures.<br></br><br></br>
                <strong> TDD</strong> -  Discipline of developing robust software by writing tests first, ensuring code correctness, and building quality into software design.<br></br><br></br>
                <strong>Learning to Learn</strong> - Ability to quicky learn new material and apply it effectively, while maintaining best practices and producing clean, DRY code.
                
                </CCText>}
        </CCExp>
        <RMExp isExpanded={expanded === 'RMExp'} onClick={() => handleClick('RMExp')}>
            {expanded !== 'RMExp' && <RMHeadline>Royal Mail</RMHeadline>}
            {expanded === 'RMExp' && <RMText1><h3>Lean & Continuous Improvement</h3><br></br>
            <strong>Lean Production</strong> Principles (World Class Mail).<br></br><br></br>
            <strong>Continuous improvement</strong> and the quest for zero defects in the system.<br></br><br></br>
            Clear, <strong>transparent communication</strong>.<br></br><br></br>
            <strong>Empowerment of colleagues</strong> and team.<br></br><br></br>
            <strong>Focus on value </strong>throughout the system.<br></br><br></br>
            <strong>Voice of customer</strong> can be heard in all stages of production.
          
        </RMText1>}
            {expanded === 'RMExp' && <RMText2><h3>People Management and Soft Skills</h3><br></br>
            Communication, collaboration and respect.<br></br><br></br>
            Problem solving and analysis.<br></br><br></br>
            Time and resource management.<br></br><br></br>
            Willingness to learn, grow and adapt to change.<br></br><br></br>
            Emotional Intelligence and productive conflict resolution<br></br><br></br>
            Ownership of performance agsinst key metrics.
        </RMText2>}
        </RMExp>
        <ECOExp isExpanded={expanded === 'ECOExp'} onClick={() => handleClick('ECOExp')}>
            {expanded !== 'ECOExp' && <ECOHeadline>East Coast Organics </ECOHeadline>}
            {expanded === 'ECOExp' && <ECOText><h3>Working with Nature, Delivering for Customers</h3> <br></br>
            Communication, training, mentoring<br></br><br></br>
            Great customer service<br></br><br></br>
            Focus on quality<br></br><br></br>
            Reactive to changing conditions<br></br><br></br>
            Organic, sustainable, low carbon
        </ECOText>}
        </ECOExp>
        <ScrollContainer>
            <PageScroll to="contact" />
        </ScrollContainer>

    </ExperienceContainer>);
}

export default Experience;