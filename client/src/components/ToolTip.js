import React, { useState } from 'react';
import styled from 'styled-components';

const TooltipContainer = styled.div`
    position: relative;
    display: inline-block;
    cursor: pointer;
    /* font-size:1.1em; */
    /* text-decoration:underline; */
    color:#2f0a49;
`;

const TooltipContent = styled.div`
    display: ${props => props.visible ? 'block' : 'none'};
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    /* padding: 10px; */
    border: 1px solid #ccc;
    /* background-color: white; */
    z-index: 1;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transform: translateX(4%)
`;

const TooltipImage = styled.img`
    width: 300px;
    height: auto;
`;

const Tooltip = ({ children, imagePath, altText }) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <TooltipContainer 
            onMouseEnter={() => setIsVisible(true)} 
            onMouseLeave={() => setIsVisible(false)}
        >
            {children}
            <TooltipContent visible={isVisible}>
                <TooltipImage src={imagePath} alt={altText} />
            </TooltipContent>
        </TooltipContainer>
    );
}

export default Tooltip;
