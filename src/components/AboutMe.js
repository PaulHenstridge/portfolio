import styled from "styled-components";

import { devIcons } from "../assets/devicons";

const AboutMeContainer = styled.section`
    height: 50vh;
    background-color:rgb(13, 20, 34);
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
   
`
const InnerContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: white;
`

const AboutText = styled.p`
    width: 70vw;
    padding: 2rem;
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

    i {
        font-size: 3.5rem;
        padding:0.4rem 0.8rem;
    }
`

const AboutMe = () => {

    return (
        <>
            <AboutMeContainer>
                <InnerContainer>
                    <AboutText>About me  - Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, saepe. Cumque reprehenderit possimus illo voluptate explicabo sunt dignissimos vel eos, id nostrum quam nisi rerum sit mollitia maxime eius. Repellat.
                        Vitae eligendi provident nobis doloribus, ut nemo rerum adipisci illum quia possimus, aperiam incidunt laboriosam. Voluptatibus totam earum quibusdam tempore aspernatur id nesciunt odit, placeat molestias eos, deserunt doloribus unde.
                    </AboutText>
                    <DummyPic />
                </InnerContainer>
                <IconsContainer>
                    {devIcons.map((icon, index) => {
                        return <i key={index} className={icon}></i>
                    })}
                </IconsContainer>
            </AboutMeContainer>

        </>
    )
}

export default AboutMe;