import styled from "styled-components";
import PageScroll from "./PageScroll";

const ProjectsContainer = styled.section`
  height: 100vh;
    background-color: #ad5ad3;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

const Projects = () => {
    return (<ProjectsContainer id="projects">
        <h2>My Projects</h2>
        <PageScroll to="experience" />
    </ProjectsContainer>);
}

export default Projects;