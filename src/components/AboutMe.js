import styled from "styled-components";

const AboutMeContainer = styled.section`
    height: 50vh;
    background-color:#c3c3c3;
    display: flex;
    justify-content: space-around;
    align-items: center;
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

const AboutMe = () => {
    return (<AboutMeContainer>
        <AboutText>About me  - Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, saepe. Cumque reprehenderit possimus illo voluptate explicabo sunt dignissimos vel eos, id nostrum quam nisi rerum sit mollitia maxime eius. Repellat.
            Vitae eligendi provident nobis doloribus, ut nemo rerum adipisci illum quia possimus, aperiam incidunt laboriosam. Voluptatibus totam earum quibusdam tempore aspernatur id nesciunt odit, placeat molestias eos, deserunt doloribus unde.
        </AboutText>
        <DummyPic />
    </AboutMeContainer>);
}

export default AboutMe;