import styled from "styled-components";


const EmailLink = styled.h2`
    padding-top:2rem;
    color:rgb(221, 248, 251);
    & > a{
        text-decoration:none; 
        color:red;
    }
`

const ContactIcon = styled.i`
    display:none;
`

const StaticContact = () => {
    return (  <>
    <EmailLink>I'd love to hear from you! <br></br> Please <a href="mailto:paulhenstridge@gmail.com"> drop me an email,</a> or use the links below</EmailLink>
    </>);
}
 
export default StaticContact;