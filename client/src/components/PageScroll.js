import styled from "styled-components";
import { Link as ScrollLink } from 'react-scroll';

const ScrollMe = styled(ScrollLink)`
    position: relative;
    font-size: 3rem;
    cursor: pointer;
    width: 4rem;
    height:4rem;
    background-color: transparent;
    transform: rotate(45deg);
    border-bottom: 8px solid #e50b0b;
    border-right: 8px solid #e50b0b;
    z-index:15;
    /* margin-bottom:8rem; */
    /* padding: 8rem 0; */
`

const PageScroll = ({ to }) => {
    return (
        <ScrollMe to={to} smooth={true} duration={800} />
    )
}

export default PageScroll;