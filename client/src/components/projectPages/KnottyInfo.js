import styled from "styled-components";
import {Link} from "react-router-dom"
import DemoVid from "./DemoVid";





const Bg = styled.div`
    background-color: #402E32;
    color:#BCA79D;
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
      color:#EF6700;
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
      color:#EF6700;
      font-size:2rem;
      @media screen and (max-width:700px){
      font-size:1.6rem;
      }
    }
    & h4 {
      color:#D89F80;
      font-size:1.4rem;
      @media screen and (max-width:700px){
      font-size:1.1rem;
      }
    }
    & h5 {
      color:#DFE0DF;
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
      color: #D89F80;
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

const KnottyInfo = () => {
    return (<Bg>
      <h1>Knotty Championship Manager</h1>
      
      <UpperContainer>
        <div> 
            <HeaderP>   
            Knotty is a fast, ferocious sport played in the remote fishing communities of the Scottish Highlands.<br></br><br></br>
            Knotty Chsmpionship Manager simulates the management of a knotty tournament. Arrange matches, play simulated games, try to top the leader board!

             </HeaderP>
        </div>
      <DemoVid/> 
      </UpperContainer>

      <LowerContainer>  
        < InfoSection >
        <p> The brief for this Codeclan project was to simulate a sports league.  This app allows users to create a new team,  schedule fixtures against 
            other teams, review the action from each match, and follow their progress on the leaderboard.  Admin users have full control, and can Create, Read, Update the details, or 
            Delete any team in the league.
               </p>

          <h3>Technical Considerations</h3>

          <p>This was a strictly Pythin only project - no JS allowed on the front end.  Server-side rendered html, using Jinja to inject data into the templates, 
            is served to the front end.
              </p>

<p>  The back end runs on Python, using the Flask framework</p>


<p>IT uses a PostgreSQL database, managed with the help of the psycopg2 package. </p>

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

          
          <p><h5>Implement a Front-end Framework</h5>  
            Having presented the project, it is no longer restricted by the 'no JS' rule, so I think the UX would be
            improved by using a framework like react. As the simple UI is something of a design choice, perhaps it could 
            be a good opportunity to explore a lightweight framework like Svelt.

</p>
          <p><h5>Improve Game simulation Logic </h5>  
          
            More variables could be introduced to add realism to game simulations and results.  Elements like weather, 
            recent form, fatigue, injury, red and yellow cards, would all bring an aditional dimension to gameplay.
<br></br>
            Updating the model to include individual players on each team would add even greater depth, and allow 
            for transfers and player stats.

</p>

        <p> <h5>Knock-out Competition</h5> 
     Introduce a Tournament class that will handle the selection of teams, and arrange knock-out matches until 
     a champion is crowned.
</p>
        </InfoSection>
      
      </LowerContainer>

    <ReturnLink to="/"> Back to Projects</ReturnLink>
    </Bg>)
        
     
}
 
export default KnottyInfo;