import styled from "styled-components";
import PageScroll from "./PageScroll";

const ProjectsContainer = styled.section`
    height: 100vh;
    background-color: #ad5ad3;
`

const Projects = () => {
    return (<ProjectsContainer id="projects">
        <h2>My Projects</h2>
        <PageScroll to="experience" />
    </ProjectsContainer>);
}

export default Projects;