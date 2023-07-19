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
    padding:8rem 0;
   
`
const InnerContainer = styled.div`
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    color: white;
    width:100%;
    height:40vh;
    padding-right: 6rem;
    background-image:url(${geltPic});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right;
    margin-bottom:4rem;

`

const AboutText = styled.p`
    width: 70vw;
    padding: 3rem;
`

const DummyPic = styled.div`
    width:12rem;
    height: 16rem;
    border-radius:25%;
    background-color:#fff;
`

const IconsContainer = styled.aside`
    display:flex;
    flex-wrap:wrap;
    width: 70%;
    justify-content: center;
    background-color:rgb(55,55,55,0.2);
    padding:3.5rem;
    border-radius:35%;
    box-shadow:inset 0px 0px 38px 18px rgb(13, 20, 34);

    i {
        font-size: 4rem;
        padding:0.4rem 0.8rem;
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
                    {/* <DummyPic /> */}
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