import styled from "styled-components";
import ExpPanel from "./ExpPanel";
import { ExpData } from "../assets/ExpData";

import rmBg from "../assets/postbox-kutan-ural.jpg"
import ecoBg from "../assets/tomatoes-markus-spiske.jpg"
import ccBg from "../assets/CodeClan.png"

const ExperienceContainer = styled.section`
    position: relative;
    background-color: #4152de;
    height: 100vh;
`


const Experience = () => {
    return (<ExperienceContainer id="experience" >
        <ExpPanel data={ExpData.CC} bg={ccBg} />
        <ExpPanel data={ExpData.RM} bg={rmBg} />
        <ExpPanel data={ExpData.ECO} bg={ecoBg} />
    </ExperienceContainer>);
}

export default Experience;