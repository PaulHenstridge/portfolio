import styled from "styled-components";
import {Link} from "react-router-dom"
import DemoVid from "./DemoVid";

import knotty_erd from "../../assets/projectImages/Knotty_ERD.png"

const knottyVideoId = "isGEibDtSRM"

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
            Knotty Championship Manager is a sports management simulator loosely based on a popular football management simulator, built with Python, Flask and PostgreSQL.<br></br><br></br>
            Knotty is a fast, ferocious sport played in the remote fishing communities of the Scottish Highlands.   
             </HeaderP>
        </div>
        <DemoVid videoId ={knottyVideoId}/> 

      </UpperContainer>

      <LowerContainer>  
        < InfoSection >
        <p><h5>Features: </h5>
          <ul>
            <li> <strong>Generate a new Team of Players
	-  </strong>Players are generated with random ability levels</li>
            <li> <strong>Buy and sell players
	-  </strong>- Propose, accept, decline or negotiate a transfer offer.  Players value is related to their skill</li>
            <li> <strong>Play matches
	-  </strong>Player skill determines a team’s strength, which determines its chances of winning a match.</li>
            <li> <strong>Match Reports
	-  </strong>See the action unfold with thrilling, blow by blow match reports
</li>
          </ul>
               </p>

          <h3>Technical Considerations</h3>

          <p>This project is built in the Model - View - Controller pattern, using the Flask framework
             to manage the flow of data between the database and the client.  It  provides RESTful
              routes and generates server rendered HTML for the browser, using the Jinja2 templating library.<br></br><br></br>

        Database interaction is facilitated by the psycopg2 library. JavaScript was not allowed din the building of this project.
        <img src={knotty_erd} alt="knotty ERD"></img>
          </p>


        </InfoSection>

        < InfoSection >
          <h3>Professional Development</h3>

          <p><h4>How has this project helped me grow as a developer?</h4>  
          <h5>Application Architecture</h5>

          The first full stack app I built, this project was a great learning experirnce for me.  
          It really opened my eyes to the importance of maintaining a logical structure, including adhering to the single responsibility 
          principle and not allowing elements to become too tightly coupled.
          This is a mistake I had been making in my projects prior to the CodeClan bootcamp.   I gained confidence
          in Object Oriented Programming and writing clean, DRY, maintainable code.
     </p>
             
         <p> <h5>SQL</h5>The project uses PostgreSQL to hold game data and provide it to the application as required.
           Tables are related to one another in various ways.  Each player has a team, and each team has many players.
           A Transfer has a player and two teams.  Creating these relationships in the databas was a great way to build competence with SQL.</p>
           
           <p><h5> Web Development with Python</h5>
           I had previously built small web apps with JavaScript, but had never done anything with Python outside of the command line.  It was
           fun to use python code to manage an api and serve html, as well as a great way to buid familiarity with the awesome language that is Python!
</p>
           <p><h5> Continuing to build</h5>
           Since the bootcamp, and with some more experience of OOP and good practice in writing code, 
          I have revisited the project and added some new features.
          In addition to being a really fun project to work on,
           its has also been encouraging to see my own development over a relatively short time.
</p>

          <p> <h4>What were the hardest problems to overcome?</h4>
          The most important challenge while building this was to structure the app correctly in the first instance,
           allowing it to be extendable. This both meant using predictable,  RESTful routing conventions,
            and logical separation of concerns in the app itself.  Creating good structures around the Game 
            and Match classes made it much easier later on to add Player and Transfer classes, and the various 
            associated actions around them.</p>

          <p> <h4>What would I do differently if starting again today?</h4>
          If starting again today I would give more thought to the CSS and HTML structure.  While the python is modular and extendable,
           the css unfortunately is not.  Some more specific rules and organisation of the code would make updating the UI a lot easier.
            In addition, some more semantic HTML tags should be used and some additional though given to users with additional
            accessibility requirements, including keyboard navigation and screen readers.  The fonts chosen also potentially
             raise accessibility issues and should be reviewed.

        </p>
        </InfoSection>

        < InfoSection >
          <h3>Next Steps</h3>

          
          <p><h5>Implement a Front-end Framework</h5>  
          As this was a Python bootcamp project, no JavaScript was permitted.  However, the user experience 
          could be improved by deploying a front end framework, such as React.
           As the simple UI is something of a design choice, it could 
            be a good opportunity to explore a lightweight framework like Svelt.

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
 
export default KnottyInfo;