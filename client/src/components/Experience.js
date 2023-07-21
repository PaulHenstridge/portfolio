import React, { useState } from 'react';

import styled from "styled-components";
import ExpPanel from "./ExpPanel";
import { ExpData } from "../assets/ExpData";

import rmBg from "../assets/postbox-kutan-ural.jpg"
import ecoBg from "../assets/tomatoes-markus-spiske.jpg"
import ccBg from "../assets/CodeClan.png"

import PageScroll from "./PageScroll";

const ExperienceContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    background-color: rgb(13, 20, 34);  
    height: 100vh;
    width: 100%;
    overflow: hidden;
`

const ScrollContainer = styled.div`
    display:flex;
    position:absolute;
    bottom:8rem;
    left:50%;
    transform: translateX(-50%);
`


const Experience = () => {
    const [activeComponent, setActiveComponent] = useState(null);


    return (<ExperienceContainer id="experience" >
        <ExpPanel
            data={ExpData.CC}
            bg={ccBg}
            active={activeComponent === 'ExPanel1'}
            onClick={() => setActiveComponent('ExPanel1')}
            isPrimary />

        <ExpPanel
            data={ExpData.RM}
            bg={rmBg}
            active={activeComponent === 'ExPanel2'}
            onClick={() => setActiveComponent('ExPanel2')} />
        <ExpPanel
            data={ExpData.ECO}
            bg={ecoBg}
            active={activeComponent === 'ExPanel3'}
            onClick={() => setActiveComponent('ExPanel3')} />

        <ScrollContainer>
            <PageScroll to="contact" />
        </ScrollContainer>

    </ExperienceContainer>);
}

export default Experience;