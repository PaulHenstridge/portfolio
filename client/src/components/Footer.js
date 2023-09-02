import styled from "styled-components"

const FooterContainer = styled.footer`
    background-color: rgb(13, 20, 34);
    color: whitesmoke;
    padding: 2rem;
    display:flex;
    justify-content:space-around;

    & > a {
        font-size: 3rem;
        text-decoration: none;
        cursor:pointer;
    }
`
const Footer = () => {
    return (<FooterContainer>
<a href="https://github.com/PaulHenstridge" > <i className='devicon-github-original'></i></a>
<a href="https://www.linkedin.com/in/paul-henstridge" > <i className='devicon-linkedin-plain colored'></i></a>
    </FooterContainer>);
}

export default Footer;