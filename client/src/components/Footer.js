import styled from "styled-components"

const FooterContainer = styled.footer`
    background-color: rgb(13, 20, 34);
    color: whitesmoke;
    padding: 2rem;
`
const Footer = () => {
    return (<FooterContainer>
        <h3>Footer</h3>
        <h5>contacts, github linkedIn </h5>
        <h6>image accreditation</h6>
    </FooterContainer>);
}

export default Footer;