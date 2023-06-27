import styled from "styled-components";


const Waiting = () => {
    return (<>
        <WaitContainer>
            <div className='ball' ></div>
        </WaitContainer>
    </>);
}

const WaitContainer = styled.div`
    width: 100%%;
    height:2rem;
    margin: auto;
    position: relative;
    background-color: rgb(255,255,0);

    .ball {
        width:2rem;
        height: 2rem;
        border-radius:50%;
        background-color: blue;
        position: absolute;
        left: 25%;
        animation: moveBall 5s linear infinite;
    }

    @keyframes moveBall {
        0% {
            left:0;
        }
        50% {
            left: calc(100vw - 2rem);
        }
        100% {
            left: 0;
        }
    }

`


export default Waiting;

