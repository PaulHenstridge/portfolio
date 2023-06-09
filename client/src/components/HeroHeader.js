import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import { Link as ScrollLink } from 'react-scroll';
import PageScroll from "./PageScroll";

const HeroContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items:center;
    background-color:#FF0;
    padding: 8rem 0;
    height:100vh;
    
`

const StyledH1 = styled.h1`
    font-size:6rem;
`

const HeroHeader = () => {
    return (
        <HeroContainer>
            <Fade duration="1000" direction="down">
                <StyledH1>Hi, I'm Ed Winchester</StyledH1>
            </Fade>
            <PageScroll to="aboutme" />
        </HeroContainer>

    )

}

export default HeroHeader;