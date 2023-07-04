import styled from "styled-components";
import { Link as ScrollLink } from 'react-scroll';
import { Fade } from "react-awesome-reveal";


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
    background-color: white;
    cursor: pointer;
    width:3rem;
    height: 3rem;
    border-radius:50%;
    
    &.active {
        background-color: red; 
    }
`

const NavLinkWrapper = styled.div`
    position: relative;
    width: fit-content;
    display: flex;
`;

const VisuallyHidden = styled.span`
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
    right: calc(100% + 1rem);
    top: 50%;
    transform: translateY(-50%);
    opacity: 0;
    transition: opacity 0.5s linear;
    

    ${StyledNavLink}:hover &, 
    ${StyledNavLink}.active & {
        width: auto;
        height: auto;
        overflow: visible;
        clip: auto;
        white-space: normal;
        opacity:1;

    }
`;
const NavLink = ({ to, children }) => (
    <NavLinkWrapper>
        <StyledNavLink to={to} smooth={true} duration={800} spy={true} activeClass="active" offset={-window.innerHeight / 3.8}>
            <VisuallyHidden> {children} </VisuallyHidden>
        </StyledNavLink>
    </NavLinkWrapper>
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