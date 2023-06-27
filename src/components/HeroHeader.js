import styled from "styled-components";
import Navigation from "./Navigation";

const HeroContainer = styled.div`
    background-color:#FF0;
    padding: 8rem 0;
`

const StyledH1 = styled.h1`
    font-size:6rem;
    
`


const HeroHeader = () => {
    return (
        <HeroContainer>
            <StyledH1>Hi, I'm Ed Winchester</StyledH1>
            <Navigation />
        </HeroContainer>

    )

}

export default HeroHeader;