import styled from "styled-components";
import PageScroll from "./PageScroll";
import hillPath from "../assets/Hillpath.jpg"

const ProjectsContainer = styled.section`
    height: 100vh;
    background-color:rgb(13, 20, 34);
    background-image:url(${hillPath});
    background-position:center;
    background-repeat:no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 8rem 0;
`

const Projects = () => {
    return (<ProjectsContainer id="projects">
        <h2>My Projects</h2>
        <PageScroll to="experience" />
    </ProjectsContainer>);
}

export default Projects;