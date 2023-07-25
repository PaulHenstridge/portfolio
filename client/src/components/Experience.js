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
`
const CCText = styled.p`
    grid-row-start:2;
    grid-column-start:2;
    font-size:1.2rem;
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
`
const RMText1 = styled.p`
    grid-row-start:2;
    font-size:1.2rem;
`
const RMText2 = styled.p`
    grid-row-start:2;
    grid-column-start:3;
    font-size:1.2rem;
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
`
const ECOText = styled.p`
    grid-row-start:2;
    grid-column-start:2;
    font-size:1.2rem;
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


    return (<ExperienceContainer id="experience" >
        <CCExp isExpanded={expanded === 'CCExp'} onClick={() => handleClick('CCExp')}>
            {expanded !== 'CCExp' && <CCHeadline>CodeClan_</CCHeadline>}
            {expanded === 'CCExp' && <CCText> Python, Javascript, Java, TDD, Pairt Programming, Full stack projects</CCText>}
        </CCExp>
        <RMExp isExpanded={expanded === 'RMExp'} onClick={() => handleClick('RMExp')}>
            {expanded !== 'RMExp' && <RMHeadline>Royal Mail</RMHeadline>}
            {expanded === 'RMExp' && <RMText1><h3>Lean & continuous Improvement</h3>WCM, continuous improvement, zero defects, transparent communication, empowerment of colleagues, focus onn value for customer.   read my blog here....</RMText1>}
            {expanded === 'RMExp' && <RMText2><h3>People management and soft skills</h3>Leadership, decision making, resource management, unlocking potential of team, owning safety, cost, productivity and quality measures.</RMText2>}
        </RMExp>
        <ECOExp isExpanded={expanded === 'ECOExp'} onClick={() => handleClick('ECOExp')}>
            {expanded !== 'ECOExp' && <ECOHeadline>East Coast Organics </ECOHeadline>}
            {expanded === 'ECOExp' && <ECOText><h3>Working with nature, delivering for customers</h3> Customer Service, Logistcs and planning, maintaing quality and service levels in dynamic, environment. </ECOText>}
        </ECOExp>
        <ScrollContainer>
            <PageScroll to="contact" />
        </ScrollContainer>

    </ExperienceContainer>);
}

export default Experience;