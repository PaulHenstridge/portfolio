import styled from "styled-components";
import ExpPanel from "./ExpPanel";
import { ExpData } from "../assets/ExpData";

import rmBg from "../assets/postbox-kutan-ural.jpg"
import ecoBg from "../assets/tomatoes-markus-spiske.jpg"
import ccBg from "../assets/CodeClan.png"

import PageScroll from "./PageScroll";

const ExperienceContainer = styled.section`
    position: relative;
    background-color: #4152de;
    height: 100vh;
`

const ScrollContainer = styled.div`
    display:flex;
    position:absolute;
    bottom:8rem;
    left:50%;
    transform: translateX(-50%)
`


const Experience = () => {
    return (<ExperienceContainer id="experience" >
        <ExpPanel data={ExpData.CC} bg={ccBg} />
        <ExpPanel data={ExpData.RM} bg={rmBg} />
        <ExpPanel data={ExpData.ECO} bg={ecoBg} />
        <ScrollContainer>
            <PageScroll to="contact" />
        </ScrollContainer>
    </ExperienceContainer>);
}

export default Experience;