import styled from "styled-components";
import { devIcons } from "../assets/devicons";
import PageScroll from "./PageScroll";
import geltPic from "../assets/Gelt.png"
import Tooltip from "./ToolTip";
import corriePic from "../assets/corrie.jpg"


const AboutMeContainer = styled.section`
    background-color:rgb(13, 20, 34);
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    /* padding: 6rem 0; */
    height:100vh;
    /* margin:8rem 0; */
    padding:4rem 0;
   
`
const InnerContainer = styled.div`
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    width:100%;
    height:40vh;
    padding-right: 6rem;
    background-image:url(${geltPic});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right;
    /* margin-bottom:1rem; */
    max-width:850px;

`

const AboutText = styled.p`
    width: 80%;
    padding: 3rem;
    /* background-color:rgba(5,5,5,0.5); */
    font-size: 0.6rem;
    font-weight:700;
 
    @media (min-width:580px) {
        font-size:0.8rem;
    }
    @media (min-width:800px) {
        font-size:1rem;
    }

    & > span {
        font-size:1.4em;
    }
`

const IconsContainer = styled.aside`
    display:flex;
    flex-wrap:wrap;
    width: 90%;
    @media (min-width:375px) {
        width:90%;
    }
    justify-content: center;
    background-color:rgb(55,55,55,0.2);
    padding:3.5rem;
    border-radius:35%;
    box-shadow:inset 0px 0px 38px 18px rgb(13, 20, 34);
    z-index:10;

    i {
        font-size: 1.6rem;
        padding:0.4rem 0.8rem;
 
    @media (min-width:580px) {
        font-size:2rem;
    }
    @media (min-width:800px) {
        font-size:2.4rem;
    }
    @media (min-width:1040px) {
        font-size:2.8rem;
    }
    @media (min-width:1880px) {
        font-size:3.6rem;
    }
    }
`

const AboutMe = () => {

    return (
        <>
            <AboutMeContainer id="aboutme">
                <InnerContainer>
                    <AboutText> <span> An enthusiastic,  self motivated career changer with a passion for learning and solving problems.</span><br></br><br></br> 
                     With experience in management, lean methodologies and process design, 
I began as a self taught hobby coder in 2020, graduating from CodeClan’s Professional Software Development bootcamp in 2023, where I developed 
the skills and processes required to turn my hobby into a careeer. <br></br><br></br>
Away from the screen,  I love to get out into nature with my partner and our dog     
 <Tooltip imagePath={corriePic}>,  Corrie</Tooltip>, which fuels my creativity and
 inspiration, as well as offering a refreshing contrast to the dynamic world of tech.
                    </AboutText>
                </InnerContainer>
                <IconsContainer>
                    {devIcons.map((icon, index) => {
                        return <i key={index} className={icon}></i>
                    })}
                </IconsContainer>
                <PageScroll to="projects" />
            </AboutMeContainer>

        </>
    )
}

export default AboutMe;