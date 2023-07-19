import React, { useState } from "react"

import styled from "styled-components"

const ExpPanel = ({ data, bg }) => {

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    }
    const ExpContainer = styled.article`
        position:absolute;
        border: 8px solid rgb(13, 20, 34);
        width:${isClicked ? '100%' : props => props.data.styles.width};
        height:${isClicked ? '100%' : props => props.data.styles.height};
        top: ${isClicked ? '0' : props => props.data.styles.top};
        left: ${isClicked ? '0' : props => props.data.styles.left};
        z-index: ${isClicked ? 2 : 0};
        transition: all 0.5s ease;
        background-image:url(${props => props.bg});
        background-size:cover;
        background-position:right;

    `

    let bullets = data.bullets.map((bullet, index) => {
        return <li key={index}>{bullet}</li>
    })

    return (
        <ExpContainer onClick={handleClick} data={data} bg={bg}>
            {data.values}
            <h4>{data.header}</h4>
            <h6>{data.bgImg} </h6>
            <ul>
                {bullets}
            </ul>
        </ExpContainer>);
}

export default ExpPanel;