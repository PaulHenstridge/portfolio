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
    opacity: ${props => props.show ? 1 : 0};
    transition: opacity 0.8s ease;
`
const StyledNavLink = styled(ScrollLink)`
    background-color: transparent;
    
    &.active {
        background-color: red; 
    }
`
const NavLink = ({ to, children }) => (
    <StyledNavLink to={to} smooth={true} duration={800} spy={true} activeClass="active" offset={-window.innerHeight / 2.5}>
        {children}
    </StyledNavLink>
);

const ScrollNav = ({ show }) => {
    return (
        <ScrollNavWrapper show={show}>
            <NavLink to="aboutme" >About</NavLink>
            <NavLink to="projects" >Projects</NavLink>
            <NavLink to="experience" >Experience</NavLink>
            <NavLink to="contact" >Contact</NavLink>
        </ScrollNavWrapper>);
}

export default ScrollNav;