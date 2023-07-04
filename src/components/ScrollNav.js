import styled from "styled-components";
import { Link as ScrollLink } from 'react-scroll';

const ScrollNavWrapper = styled.nav`
    position: fixed;
    right: 0;
    top: 30%;
    width: 6rem;
    height: 40%;
    background-color: transparent;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const NavLink = styled(ScrollLink)`
    background-color: transparent;
    
    &.active {
        background-color: red; 
        font-size: 5rem;
    }
`


const ScrollNav = () => {
    return (<ScrollNavWrapper>
        <NavLink to="aboutme" smooth={true} duration={500} spy={true} activeClass="active" >About Me</NavLink>
        <NavLink to="projects" smooth={true} duration={500} spy={true} activeClass="active" >My Projects</NavLink>
        <NavLink to="experience" smooth={true} duration={500} spy={true} activeClass="active" >My Experience</NavLink>
        <NavLink to="contact" smooth={true} duration={500} spy={true} activeClass="active" >Contact Me</NavLink>

    </ScrollNavWrapper>);
}

export default ScrollNav;