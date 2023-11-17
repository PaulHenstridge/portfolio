import styled from "styled-components";
import {Link} from "react-router-dom"
import DemoVid from "./DemoVid";





const Bg = styled.div`
    background-color: #0a0a23;
    color:#ffffff;
    padding: 0 5rem;
    @media screen and (max-width:700px){
      padding: 0 3rem;
    }
    @media screen and (max-width:500px){
      padding: 0 1.5rem;
    }
    & > h1 {
      font-size:4.6rem;
      /* margin: 1.6rem; */
      padding: 2rem;
      color:#99c9ff;
;
      line-height:1.2;
      @media screen and (max-width:600px){
      font-size:3.6rem;
    }
      @media screen and (max-width:420px){
      font-size:2.6rem;
    }
    }
    & img {
      min-width: 400px;
      @media screen and (max-width:780px) {
        max-width: 100%;
      }
    }

    @media screen and (min-width:781px) {
        &  img:nth-child(odd) {
      float: left;
      max-width:40%;
      margin:1rem;
    }
    &  img:nth-child(even) {
      float: right;
      max-width:40%;
      margin:1rem;
    }
    }
  

    & h3 {
      color:#99c9ff;
      font-size:2rem;
      @media screen and (max-width:700px){
      font-size:1.6rem;
      }
    }
    & h4 {
      color:#f1be32;
      font-size:1.4rem;
      @media screen and (max-width:700px){
      font-size:1.1rem;
      }
    }
    & h5 {
      color:#5a01a7;
      font-weight:bold;
    }

`

const UpperContainer = styled.div`
    display: flex;
    flex-wrap:nowrap;
    @media screen and (max-width:1020px) {
      flex-direction:column;
      align-items:center;
      justify-content:center;
      div:nth-child(2){
        align-self:center;
        min-width:370px;
        min-height:210px;
      }
      
    
    }
`
const LowerContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const InfoSection = styled.section`
    background-color: transparent;
    &  p{
      margin: 1rem;
      text-align: justify;
      hyphens: auto;
      font-size: 1.2rem;
      @media screen and (max-width:700px){
      font-size:1rem;
      min-width: 18ch;
      }
    }
  
`

const HeaderP = styled.p`
    font-size:1.6rem;
    font-weight:bold;
    margin: 0.8rem;
    text-align: justify;
    line-height:1.4;
      /* hyphens: auto; */
      color: #f1be32;
    @media screen and (max-width:1130px){
      font-size:1.4rem;
    }
    @media screen and (max-width:700px){
      font-size:1.2rem;
    }
`
const ReturnLink = styled(Link)`
  font-size:2rem;
  color:#3ea2a9 ;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: #e40c0c; 
  }
`

const QuincyInfo = () => {
    return (<Bg>
      <h1>Quincy API</h1>
      
      <UpperContainer>
        <div> 
            <HeaderP>   
            Quincy Api ........
             </HeaderP>
             
        </div>
      <DemoVid/> 
      </UpperContainer>

      <LowerContainer>  
        < InfoSection >
        <p><h5>Features: </h5>
 All the good shizzles
               </p>

          <h3>Technical Considerations</h3>

          <p>This project is ....<br></br><br></br>

       
          </p>


        </InfoSection>

        < InfoSection >
          <h3>Professional Development</h3>

          <p><h4>How has this project helped me grow as a developer?</h4>  
          <h5>...</h5>

         ....
     </p>
             
         <p> <h5>8888</h5>mittens.</p>
           
           <p><h5> %%</h5>
          parsnips
</p>

          <p> <h4>What were the hardest problems to overcome?</h4>
         clingons</p>

          <p> <h4>What would I do differently if starting again today?</h4>
            ........

        </p>
        </InfoSection>

        < InfoSection >
          <h3>Next Steps</h3>

          
          <p><h5>ideas</h5>  
      wibble

</p>
          <p><h5>Further Extensions </h5>  
          <ul>
            <li><strong> Team Selection </strong> Choose which players take part in the next game  </li>
            <li><strong> Knock-out Competition </strong>      Introduce a Tournament class that will handle the selection of teams, and arrange knock-out matches to determine a champion
  </li>
            <li><strong> Training </strong> a train() method on Player could increase the players skill, and hence value.
  </li>
            <li><strong> Fatigue </strong> Introduce a fatigue attribute on Player, which increases after games or training,
             potentially affects skill level.
  </li>
            <li><strong> Fouls/ Injuries </strong> Update the game simulation algorithm to include injuries and fouls
  </li>
            <li><strong> Additional attributes </strong> Attributes such as Speed, Flair, Aggression could be included on Player, and feed into Team properties.
  </li>
          </ul>
 </p>

        </InfoSection>
      
      </LowerContainer>

    <ReturnLink to="/"> Back to Projects</ReturnLink>
    </Bg>)
        
     
}
 
export default QuincyInfo;