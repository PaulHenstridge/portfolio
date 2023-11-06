import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import { Link as ScrollLink } from 'react-scroll';
import PageScroll from "./PageScroll";

import backgroundImage from '../assets/Kiess.jpg'
import headshot from '../assets/headshot.png'

import { keyframes } from "@emotion/react";
import { Reveal } from "react-awesome-reveal";

const SimpleFadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;


const HeroContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items:center;
    background-color:#FF0;
    background-image:url(${backgroundImage});
    background-position: center;
    /* background-attachment: fixed; */
    padding: 8rem 0;
    height:100vh;
    
`

const StyledH1 = styled.h1`
    font-size:3rem;

    @media (min-width:375px) {
        font-size:3rem;
    }
    @media (min-width:580px) {
        font-size:3.6rem;
    }
    @media (min-width:800px) {
        font-size:4.2rem;
    }
    @media (min-width:1040px) {
        font-size:5rem;
    }
    @media (min-width:1880px) {
        font-size:6rem;
    }
`
const HeadshotFrame = styled.div`
    width: 250px;
    height: 250px;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    background:rgb(225 246 300);  
    outline: 3px solid rgb(96 110 125);

    img { 
        position: absolute;
        min-width: 100%;
        min-height: 100%;
        top: 60%;
        left: 55%;
        transform: translate(-50%, -50%);
    }
    

`

const HeroHeader = () => {
    return (
        <HeroContainer>
            <Fade duration="1000" direction="down">
                <StyledH1>Hi, I'm Paul </StyledH1>
            </Fade>
            <Reveal keyframes={SimpleFadeIn} duration={3200}>
                <div>
                <h1> Software Developer</h1>
                <h2>JavaScript|Python|Java</h2>
                </div>
        
            </Reveal>
            {/* <HeadshotFrame>
                <img src={headshot} alt="my face"></img>
            </HeadshotFrame> */}
            <PageScroll to="aboutme" />
        </HeroContainer>

    )
}

export default HeroHeader;