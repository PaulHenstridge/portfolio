import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import { Link as ScrollLink } from 'react-scroll';
import PageScroll from "./PageScroll";

import backgroundImage from '../assets/Kiess.jpg'

const HeroContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items:center;
    background-color:#FF0;
    background-image:url(${backgroundImage});
    background-position: left;
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

const HeroHeader = () => {
    return (
        <HeroContainer>
            <Fade duration="1000" direction="down">
                <StyledH1>Hi, I'm Paul </StyledH1>
            </Fade>
            <PageScroll to="aboutme" />
        </HeroContainer>

    )

}

export default HeroHeader;