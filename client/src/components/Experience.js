import styled from "styled-components";

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

`
const ExperiencePanel = styled.article`
    color: white;
    width: 70%; 
    border: 2px solid white;
    margin: 2rem 0;
    padding: 1rem 3rem;
    & p {
        opacity: 0;
        transition: opacity 0.3s ease; 
    }
    &:hover p {
            opacity: 1;

    }  
`


const Experience = () => {
    return ( <Container className="hoverable">
        <ExperiencePanel >
            <h3>CodeClan Professional Software Development Bootcamp</h3>
            <p>some details to be revealed on hover - explore accessability implications</p>
        </ExperiencePanel>

        <ExperiencePanel>
            <h3>Royal Mail Operations</h3>
            <p>some details to be revealed on hover - explore accessability implications</p>
        </ExperiencePanel>

        <ExperiencePanel>
            <h3>East Coast Organics</h3>
            <p>some details to be revealed on hover - explore accessability implications</p>
        </ExperiencePanel>
    
    </Container> );
}
 
export default Experience;