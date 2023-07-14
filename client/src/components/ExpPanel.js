import styled from "styled-components"

const ExpPanel = ({ data, bg }) => {

    const ExpContainer = styled.article`
        position:absolute;
        border: 8px solid rgb(13, 20, 34);
        width:${props => props.data.styles.width};
        height:${props => props.data.styles.height};
        top:${props => props.data.styles.top};
        left:${props => props.data.styles.left};

        background-image:url(${props => props.bg});
        background-size:cover;
        background-position:right;

    `

    let bullets = data.bullets.map((bullet, index) => {
        return <li key={index}>{bullet}</li>
    })

    return (
        <ExpContainer data={data} bg={bg}>
            {data.values}
            <h4>{data.header}</h4>
            <h6>{data.bgImg} </h6>
            <ul>
                {bullets}
            </ul>
        </ExpContainer>);
}

export default ExpPanel;