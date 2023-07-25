import styled from "styled-components";
import { devIcons } from "../assets/devicons";
import PageScroll from "./PageScroll";
import geltPic from "../assets/Gelt.png"

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
    margin-bottom:4rem;
    max-width:850px;

`

const AboutText = styled.p`
    width: 80%;
    padding: 3rem;
    font-size: 0.6rem;
 
    @media (min-width:580px) {
        font-size:0.8rem;
    }
    @media (min-width:800px) {
        font-size:1rem;
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
                    <AboutText>About me  - Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, saepe. Cumque reprehenderit possimus illo voluptate explicabo sunt dignissimos vel eos, id nostrum quam nisi rerum sit mollitia maxime eius. Repellat.
                        Vitae eligendi provident nobis doloribus, ut nemo rerum adipisci illum quia possimus, aperiam incidunt laboriosam. Voluptatibus totam earum quibusdam tempore aspernatur id nesciunt odit, placeat molestias eos, deserunt doloribus unde.
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