import styled from "styled-components";
import {Link} from "react-router-dom"
import DemoVid from "./DemoVid";





const Bg = styled.div`
    background-color:#E8F3F1;
    color:#003929;
    padding: 0 5rem;
    @media screen and (max-width:700px){
      padding: 0 3rem;
    }
    @media screen and (max-width:500px){
      padding: 0 1.5rem;
    }
    & > h1 {
      font-size:5rem;
      /* margin: 1.6rem; */
      padding: 2rem;
      color:#7C40B3;
      @media screen and (max-width:600px){
      font-size:4rem;
    }
      @media screen and (max-width:420px){
      font-size:3rem;
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
      color:#7C40B3 ;
      font-size:2rem;
      @media screen and (max-width:700px){
      font-size:1.6rem;
      }
    }
    & h4 {
      color:#4EC9B0;
      font-size:1.4rem;
      @media screen and (max-width:700px){
      font-size:1.1rem;
      }
    }
    & h5 {
      color:#97B0AA;
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
      hyphens: auto;
      color: #4EC9B0;
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

const YahtzeeInfo = () => {
    return (<Bg>
      <h1>TeeDee-DeeYahtzee</h1>
      
      <UpperContainer>
        <div> 
            <HeaderP>   
            Yahtzee!  Play the game and win a boat!  Lets see what you could have won....
             </HeaderP>
        </div>
      <DemoVid/> 
      </UpperContainer>

      <LowerContainer>  
        < InfoSection >
        <p> This project begas an a TDD practice exercise, using Java and Junit to test the game logic.
            I decided to extend the project by adding a GUI to make the game playable.  
            I focused on SOLID principles, TDD and DRY readable code in this project.
               </p>

          <h3>Technical Considerations</h3>

          <p>TDD - MVC pattern - MVVM model - use of Enums - strict seperation of cencerns
              </p>

<p>  The app is built with Java, in the MVVM pattern, with a Java Swing GUI.</p>


<p>.... </p>

    <p>The diagram shows ....</p>
        </InfoSection>

        < InfoSection >
          <h3>Professional Development</h3>

          <p><h4>How has this project helped me grow as a developer?</h4>  
          <h5>MVC Pattern</h5>
         modilar code, seperation of concerns, dep injection? </p>
             
         <p> <h5>SQL</h5> Exposure to SQL and relational DBs</p>
           
           <p><h5> full stack python</h5>
           Using Py for web development....
</p>

          <p> <h4>What were the hardest problems to overcome?</h4>
          The trickiest parts of the project were...</p>

          <p> <h4>What would I do differently if starting again today?</h4>
          I would ...

        </p>
        </InfoSection>

        < InfoSection >
          <h3>Next Steps</h3>

          
          <p><h5>Implement web API</h5>  
           use Spring Boot to implement a web API, allowing the game ot be extended to the browser.

</p>
          <p><h5>Add data persistence </h5>  
          
a database to save high scores, user information etc would add ot he playability of the game.

</p>

        <p> <h5>Multi-player play</h5> 
Explore options to expand the game to be multi-player
</p>
        </InfoSection>
      
      </LowerContainer>

    <ReturnLink to="/"> Back to Projects</ReturnLink>
    </Bg>)
        
     
}
 
export default YahtzeeInfo;