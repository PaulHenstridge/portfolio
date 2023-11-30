import styled from "styled-components";
import YouTube from "react-youtube";

const VideoContainer = styled.div`
    /* border: 4px solid black; */
    aspect-ratio: 16/9;
    /* width: 40%; */
    flex:none;
    align-self: flex-start;
`

const DemoVid = ({videoId}) => {

    const opts = {
        height: '100%', 
        width: '100%', 
    };
    return ( <VideoContainer>
      <YouTube videoId={videoId} opts={opts} />
     </VideoContainer> );
}
 
export default DemoVid;