import React, { useState, useEffect } from 'react';

import styled from "styled-components";
import { Link as ScrollLink } from 'react-scroll';

const ScrollNavWrapper = styled.nav`
    position: fixed;
    right: 0;
    top: 30%;
    /* width: 0.5rem; */
    height: 40vh;
    z-index:10;
    background-color: transparent;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    opacity: ${props => props.show ? 1 : 0};
    transition: opacity 0.8s ease;
    margin-right: ${props => props.marginRight};
`
const StyledNavLink = styled(ScrollLink)`
    background-color: #3ea2a9;
    cursor: pointer;
    border-radius:50%;
    width:1rem;
    height: 1rem;
    

    &.active {
        background-color: #e50b0b; 
    }
`

const NavLinkWrapper = styled.div`
    position: relative;
    width: fit-content;
    display: flex;
    color: #3ea2a9;
    text-shadow:0px 0px 6px black;
    font-size:1.4rem;
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

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    //managing nav position
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        // cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const navMarginRight = windowWidth > 1320 ? ((windowWidth - 1320) / 4) + "px" : "0px";


    return (
        <ScrollNavWrapper show={show} marginRight={navMarginRight}>
            <NavLink to="aboutme" >About</NavLink>
            <NavLink to="projects" >Projects</NavLink>
            <NavLink to="experience" >Experience</NavLink>
            <NavLink to="contact" >Contact</NavLink>
        </ScrollNavWrapper>);
}

export default ScrollNav;