import React, { useState } from 'react';
import axios from 'axios';

import styled from "styled-components";
import seaSail from "../assets/SeaSail.jpg"

const ContactContainer = styled.section`
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:#5d1def;
    height:100vh;
    background-image:url(${seaSail});
    /* background-repeat:no-repeat; */
    background-size: cover;
    background-attachment:fixed;
`
const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    height: 75vh;
    width: 75vw;
    background-color: rgba(5,5,5,0.5);
    justify-content: space-evenly;
    align-items:center;
    padding: 1rem;
`

const InputContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items:flex-start;
    width:60%;
    input {
        width:100%;
        background-color: transparent;
        border-bottom: 4px solid black;
        margin: 1rem 0;
        font-size:1rem;
    }
    
    input:focus {
        outline: none; /* Remove the default outline */
        border-bottom: 2px solid #00a4cc; /* Add a 2px blue border */
        box-shadow: 0 4px 5px 0 5px #00a4cc; /* Add a blue shadow */
}
`

const StyledButton = styled.button`
    background-color: rgba(5,5,5,0.5);
    font-size:2rem;
    border: 1px solid black;
    border-radius:12%;
    padding: 0.6rem 1.2rem;
    color: #e50b0b;
    cursor:pointer;
    &:hover{
        background-color:black;
    }
`




const Contact = () => {

    const [form, setForm] = useState({
        name: '',
        senderEmail: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:3001/send', form)
            .then((response) => console.log(response.data))
            .catch((error) => console.error(error));
    }

    return (
        <ContactContainer id="contact" >

            <StyledForm onSubmit={handleSubmit}>
            <h1>Get in touch...</h1>
                <InputContainer>
                    <label for="name">NAME</label>
                    <input id="name" name="name" type="text" onChange={handleChange} />
                </InputContainer>
                <InputContainer>
                    <label for="email">EMAIL</label>
                    <input id="email" name="senderEmail" type="text" onChange={handleChange} />
                </InputContainer>
                <InputContainer>
                    <label for="subject">SUBJECT</label>
                    <input id="subject" name="subject" type="text" onChange={handleChange} />
                </InputContainer>
                <InputContainer>
                    <label for="message">MESSAGE</label>
                    <input id="message" name="message" type="text" onChange={handleChange} />
                </InputContainer>
                <StyledButton type="submit">Send</StyledButton>
            </StyledForm>
        </ContactContainer>);
}

export default Contact;