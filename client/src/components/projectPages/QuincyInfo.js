import styled from "styled-components";
import {Link} from "react-router-dom"

const StyledH1 = styled.h1`
color: rgb(45, 27, 98);
`


const QuincyInfo = () => {


    return (<>
    <StyledH1> QuincyAPI Info Page woop! </StyledH1> 
    <Link to="/">Back to Projects</Link>

    </>  );
}
 
export default QuincyInfo;