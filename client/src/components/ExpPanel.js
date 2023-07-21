import React, { useState } from "react"

import styled from "styled-components"

const ExpPanel = ({ data, bg, active, isPrimary, onClick }) => {


    const ExpContainer = styled.article`
        border: 8px solid rgb(13, 20, 34);
        z-index: ${({ active }) => active ? 2 : 1};
        transition: all 0.5s ease;
        background-image:url(${props => props.bg});
        background-size:cover;
        background-position:right;
        /* grid-area: ${({ active, isPrimary }) => active ? '1 / 1 / span 2 / span 2' : (isPrimary ? '1 / 1 / span 2 / auto' : 'auto')}; */
        /* visibility: ${({ active }) => active ? 'visible' : 'hidden'}; */
    `

    let bullets = data.bullets.map((bullet, index) => {
        return <li key={index}>{bullet}</li>
    })

    return (
        <ExpContainer onClick={onClick} data={data} bg={bg} active={active} isPrimary={isPrimary}>
            {data.values}
            <h4>{data.header}</h4>
            <h6>{data.bgImg} </h6>
            <ul>
                {bullets}
            </ul>
        </ExpContainer>);
}

export default ExpPanel;