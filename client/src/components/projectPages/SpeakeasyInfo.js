import styled from "styled-components";
import {Link} from "react-router-dom"
import DemoVid from "./DemoVid";

import contextDiagram from "../../assets/projectImages/ContextDiagram.png"
import appComponent from "../../assets/projectImages/AppComponent.png"
import projectDiagram from "../../assets/projectImages/projectDiagram.png"



const Bg = styled.div`
    background-color: black;
    color:yellow;
    & > h1 {
      font-size:2.6rem;
      /* margin: 1.6rem; */
      padding: 2rem;
    }
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

`

const UpperContainer = styled.div`
    display: flex;
    flex-wrap:nowrap;
    & > div {
      /* flex: 1; */
    }
`
const LowerContainer = styled.div`
    display: flex;
    flex-direction: column;

`

const InfoSection = styled.section`
    background-color: transparent;
    & > p{
      margin: 1rem;
      text-align: justify;
      hyphens: auto;
    }

`
const HeaderP = styled.p`
    font-size:1.4rem;
    margin: 0.8rem;
    text-align: justify;
      hyphens: auto;
`


// const VideoContainer = styled.div`
//     border: 4px solid yellow;
//     aspect-ratio: 16/9;
//     width: 40%;
//     flex:none;
//     align-self: flex-start;
// `

const SpeakeasyInfo = () => {
    return (<Bg>
      <h1>SpeakEasy Accessibillity Assistant</h1>
      
      <UpperContainer>
        <div> 
            <HeaderP> The purpose of the SpeakEasy project was to explore the potential of AI to create a more friendly and intuitive user experience, 
              particularly for those users with different visual or cognitive requirements.  
           </HeaderP>   
            <HeaderP>   SpeakEasy aims to "round the sharp edges" of the user experience, providing a soft link between the user 
             and the machine.
             </HeaderP>
           <HeaderP>   It interprets the users natural speech, then passes a JavaScript readable response to the application to carry out the request.
            </HeaderP>
        </div>
   
      <DemoVid/> 

      </UpperContainer>



      <LowerContainer>
      
        < InfoSection >
          <h3>Technical Considerations</h3>

          <p>Although primarily a JavaScript project, I chose to use Java Spring to manage the database API, having recently studied Spring
             and being very keen to deploy it in a project at first opportunity. Spring provided a neat, reliable way to create the CRUD endpoints required.  </p>

<p>The back end runs on Node.js with an Express server, which is passed into an instance of socket.io to allow instant two way communication between
   the client and server via a web socket connection.   User data is passed to an AI model which has been trained to respond with a JS readable object
   that can be reliably parsed by the data handler, thus providing instructions to manipulate the front end application.</p>

   <img src={projectDiagram} alt="project-diagram"></img>

<p>The front end is a React application which uses the voice-to-text API to turn user's verbal input to a string 
  that can be passed to the AI on the back end,
   and speech-synthesis to convert the string responses back into audible speech for the user.   The useContext API is used 
   to cleanly connect these services to the components that require them.  UseContext is also deployed,
    in combination with styledComponents theme provider, to give the user different visual options for accessibility. </p>

    <p>The diagram to the right shows the flow of data within the application, from the users spoken command, 
      via websockets to the AI model, onwards to the data handler and then returned to the front end
      where an action is initialised and user receives visible and audable response.</p>
        </InfoSection>

        < InfoSection >
          <h3>Professional Development</h3>

          <p><h5>How has this project helped me grow as a developer?</h5>  
          This project was the perfect opportunity explore the useContext hook and learn more about managing state across
           multiple components. The digram below illustrates how four seperate contexts are used to provide unrelated components with the data they require.
            </p> <img src={contextDiagram} alt="context diagram"></img><p>  Some components required access to the speech-to-text API to process voice input,
           while others required Speech Synthesis functionality to return audible output,  and others required a websocket connection to communicate with the back end,
            while all components were subject to theme toggling. <br></br> Using contexts to provide this state made the app so much cleaner and easier to work with.
              It also makes it so much easier to extend the project, as any components rendered within a given context can have access to that state. </p>
             
*******  ADD CONTECT DIAGRAM AND APP COMPONENT CODE  ******************
         <p>  It was also great to learn more about digital accessibility, including the use and expectations of screen readers, creating high contrast visual designs, and implementing full keyboard navigation.
            <br></br> I have a much clearer understanding of the problems faced by a great many people in accessing the digital world,
             and it was really exciting to leverage a new technology to create solutions that could help people realise their potential.</p>
           
           <p>Websockets</p>

          <p> <h5>What were the hardest problems to overcome?</h5>The trickiest parts of the project were, on one hand, to persuade the AI model to return its response in a predictable, JS readable format, and on the other hand, to handle the error when it failed to do so.  After numerous iterations, a system prompt was developed which successfully launched the correct font end process about 99% of there time.  To handle the remaining 1%, with the time and resources available, the non JS readable response is returned as a conversation message, avoiding an error on the back end an unresponsive front end.</p>

          <p> <h5>What would I do differently if starting again today?</h5>
          I would think a bit more about the application structure, particularly in terms of maintaining loose couplings
           between components.  For example, the front end calls the database API directly, and a planned extension 
           would also have the dataHandler interact directly with the DB.  I think it would be more appropriate for all 
           DB operations to be handled centrally on the back end. <br></br>  It might be more practical, and a great learning exercise, to re-write the
          back end in Java, taking advantage of the Spring framework and bringing all back-end operations under one umbrella.

        </p>
        </InfoSection>

        < InfoSection >
          <h3>Next Steps</h3>
          <p><h5>Error Handling </h5>  
          More robust AI response error handling is required, as the current workaround only avoids 
          errors and non-responsive behaviour.  A separate API stream for managing errors would be 
          useful in maintaining a smooth user experience. In some cases the prompt may be automatically
           re-submitted with additional failure context, or in others the user may be prompted for 
           additional information.

</p>
          <p><h5>AI Model </h5>  
          
          This project uses OpenAI's GPT3.5 turbo, the most advanced model available at time of building (June 2023). 
          For current requirements it is quite capable, but LLMs will continue to improve,
           and so updating the LLM may return benefits in the future. <br></br>
           For future extension, training an AI model with real data would improve response accuracy, and reduce the tokens used in each request, thus reducing costs. 
If handling more traffic, or using a more expensive model, this could represent a significant saving.

</p>

        <p> <h5>Further Extensions and Use Cases</h5> 
      <ul>
           <li>Further integrate with users system, e.g. managing email, SMS, WhatsApp </li>
         <li> Real time assistance with dictation</li> 
         <li>Translation services </li> 
          <li> Technologically assisted home help solution</li>
          <li>Learning assistant </li>
      </ul>
</p>
        </InfoSection>
      
      </LowerContainer>

   

      

    <Link to="/">Back to Projects</Link>
    </Bg>)
        
     
}
 
export default SpeakeasyInfo;