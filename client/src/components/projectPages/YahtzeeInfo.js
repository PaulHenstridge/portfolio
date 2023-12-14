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
    line-height:1.4;
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
      <h1>JavaYahtzee!</h1>
      
      <UpperContainer>
        <div> 
            <HeaderP>   
            The fun dice game Yahtzee, built entirely with Java, with a GUI front end.<br></br><br></br>

            Try to register the best possible score each turn with a maximum of three dice rolls!
             </HeaderP>
        </div>
      <DemoVid/> 
      </UpperContainer>

      <LowerContainer>  
        < InfoSection >
        <p> 
The purpose of this project was to immerse myself in Java and really get into the “Java mindset”. 
 I enjoyed the brief introduction at CodeClan, and wanted to build on that with some more time to explore. 
  I chose Yahtzee because it’s a relatively simple game, but has a reasonable amount of logic behind it.

The project moved slowly at first, as I knew what I wanted to do but wanted to figure out the right way to implement it. 
 By considering at each step what approach would be most appropriate to produce clean, maintainable, extendable code,
  I tried to build a project that adheres closely to SOLID principles.
</p>

          <h3>Technical Considerations</h3>

          <p>In order to maintain clear separation of concerns and loose couplings between components,
             I adapted the Model - View - Controller (MVC) pattern to include a view model, which is responsible
              for maintaining the state required in the View.  This maintains the modularity in view logic,
               and avoids a direct observer relationship between the view and the model.
</p>


<p> A GUI is used to represent the game on the front end, allowing me to fully render the game from within the Java application,
 without the need to serve HTML for a browser.</p>


        </InfoSection>

        < InfoSection >
          <h3>Professional Development</h3>

          <p><h4>How has this project helped me grow as a developer?</h4>  
          <h5>"Java Mindset"</h5>
          I must admit, on my first experience with Java I found some aspects of it, such as static typing, a bit cumbersome,
           and the IDE somewhat overbearing.  However, since the bootcamp I have been learning more about OOP and SOLID principles,
            and I have come to understand and appreciate the benefits of Java’s “belt and braces” approach, and the security
             and confidence it can offer a developer.

I can see now that type-checking at compile time significantly reduces the chances of runtime errors, making it harder to make mistakes
 and easier to pinpoint them when they occur.<br></br><br></br>

The development process feels deliberate and structured, and the emphasis on explicit type declarations 
and object-oriented principles within Java has helped me develop a more disciplined
  "Java Mindset", which I am trying to internalise and deploy in other projects and other languages. </p>
             
         <p> <h5>Enums</h5>
         I deployed three sets of enums which were used throughout the project to eliminate the possibility of error in these categories. 
          Although using common enums does bind the model and view to certain extent, I feel it is a fair trade off 
          for the type security it provides.  These categories are fundamental to the operation of the game, 
          so would be unlikely to change in any future extension or adaptation of the game.
          </p>
           
           <p><h5> Interfaces</h5>
           I made extensive use of interfaces in the project to ensure modularity and flexibility in the codebase. 
           By defining clear contracts through interfaces, I was able to achieve loose coupling between components,
            which is essential for maintainable and scalable software. This approach allowed different parts of 
            the application to interact without being tightly bound, giving freedom to modify or extend individual 
            components without affecting others.

The use of interfaces ensured that higher-level modules are not dependent on lower-level modules, 
but both are dependent on abstractions.  For example, the YahtzeeController takes an instance of IGame,
 rather than Game itself.  This means changes to the Game logic will not affect the Controller logic,
  as log as Game implements all the methods of IGame.
</p>

          <p> <h4>What were the hardest problems to overcome?</h4>
          One of the biggest challenges was maintaining loose couplings across the application.
            Using a Java GUI meant Java code across the project and the risk of GUI logic becoming bound to the model.
             The GUI receives new data from a propertyChangeListener. The properties are managed by classes in the model,
               which meant that the View would need to directly observe and react to changes in the model.
                 This represented too close a coupling, so I decided to use a viewModel as an intermediary to manage state for the view. 
  </p> 
   <p>             
In this way, the controller calls methods on the model and passes the result to be stored on the viewModel. 
 The viewModelObserver observes and updates the GUI when any property changes, without any direct relationship with the model.
</p>

          <p> <h4>What would I do differently if starting again today?</h4>
          If I were starting a new Java project today, I would use the Spring framework from the beginning. 
           Now that I have some experience using “vanilla Java” I am keen to explore the many features
            and benefits that Spring provides, and to gain experience using it in a real project.

        </p>
        </InfoSection>

        < InfoSection >
          <h3>Next Steps</h3>

          
          <p>
Given my focus on making the application modular and extendable,
 the next logical step would be to extend it! <br></br> Here are some ideas under consideration:
</p>
          <p><h5>Develop Alternative Game Models </h5>  
          
          The modular structure should allow an entirely new set of model classes to be substituted, providing an alternative gameplay experience
           without affecting the rest of the application.

</p>

        <p> <h5>Add a Web API</h5> 
        Adapt the project to be consumed by a browser.  Build a JavaScript front end to consume it.
</p>
        <p> <h5>MultiPplayer Play</h5> 
        Keep track of multiple players games at the same time, manage turns, compare scores.
</p>
        <p> <h5>Add a Database</h5> 
        Retain game data such as high scores and player profiles.

</p>
        </InfoSection>
      
      </LowerContainer>

    <ReturnLink to="/"> Back to Projects</ReturnLink>
    </Bg>)
        
     
}
 
export default YahtzeeInfo;