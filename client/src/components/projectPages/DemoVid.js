import styled from "styled-components";

const VideoContainer = styled.div`
    border: 4px solid black;
    aspect-ratio: 16/9;
    width: 40%;
    flex:none;
    /* align-self: flex-start; */
`

const Sh1 = styled.h1`
 color: red;
`

const DemoVid = (url) => {
    return ( <VideoContainer>
    <Sh1>Demo video...</Sh1>
     </VideoContainer> );
}
 
export default DemoVid;