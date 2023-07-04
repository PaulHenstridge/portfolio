import styled from "styled-components";

const ContactContainer = styled.section`
    background-color:#5d1def;
    height:100vh;
`

const Contact = () => {
    return (<ContactContainer id="contact" >
        <h3>Contact me</h3>
    </ContactContainer>);
}

export default Contact;