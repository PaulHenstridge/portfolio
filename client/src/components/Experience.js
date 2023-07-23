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
  margin:1rem solid rgb(13, 20, 34);
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
    

`
const CCHeadline = styled.h3`
    grid-column-start:2;
    grid-row-start:2;
    font-size: 6rem;
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
`
const RMHeadline = styled.h3`
    grid-column-start:2;
    grid-row-start:2;
    font-size: 4rem;
`
const RMText1 = styled.p`
    grid-row-start:2;
    font-size:1.6rem;
`
const RMText2 = styled.p`
    grid-row-start:2;
    grid-column-start:3;
    font-size:1.6rem;
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
`
const ECOHeadline = styled.h3`
    grid-column-start:2;
    grid-row-start:2;
    font-size: 4rem;
`
const ECOText = styled.p`
    grid-row-start:2;
    grid-column-start:2;
    font-size:1.6rem;
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
        </CCExp>
        <RMExp isExpanded={expanded === 'RMExp'} onClick={() => handleClick('RMExp')}>
            {expanded !== 'RMExp' && <RMHeadline>Royal Mail</RMHeadline>}
            {expanded === 'RMExp' && <RMText1><h3>Lean & continuous Improvement</h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, inventore. Consequatur, quasi.</RMText1>}
            {expanded === 'RMExp' && <RMText2><h3>People management and soft skills</h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, inventore. Consequatur, quasi.</RMText2>}
        </RMExp>
        <ECOExp isExpanded={expanded === 'ECOExp'} onClick={() => handleClick('ECOExp')}>
            {expanded !== 'ECOExp' && <ECOHeadline>East Coast Organics </ECOHeadline>}
            {expanded === 'ECOExp' && <ECOText><h3>Some Dynamic Headline</h3>East Coast Organics.... Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quae ratione ea facilis voluptate natus! </ECOText>}
        </ECOExp>
        <ScrollContainer>
            <PageScroll to="contact" />
        </ScrollContainer>

    </ExperienceContainer>);
}

export default Experience;