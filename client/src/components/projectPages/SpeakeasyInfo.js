import styled from "styled-components";
import {Link} from "react-router-dom"
import DemoVid from "./DemoVid";



const Bg = styled.div`
    background-color: black;
    color:yellow;
`

const UpperContainer = styled.div`
    display: flex;
    & > div {
      flex: 1;
    }
`
const LowerContainer = styled.div`
    display: flex;
    flex-direction: column;

`

const InfoSection = styled.section`
    background-color: transparent;
    & > p{
      margin: 0.6rem;
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


const VideoContainer = styled.div`
    border: 4px solid yellow;
    aspect-ratio: 16/9;
    flex: 0 0 40%;
    height: auto;
`

const SpeakeasyInfo = () => {
    return (<Bg>
      <h1>SpeakEasy Accessabillity Assistant</h1>
      
      <UpperContainer>
        <div> 
            <HeaderP> The purpose of the SpeakEasy project was to explore the potential of AI to create a more frirndly and intuitive user experience, 
              particularly for those users with different visual or cognative requirements.  
           </HeaderP>   
            <HeaderP>   SpeakEasy aims to "round the sharp edges" of the user experience, providing a soft link between the user who knows what they want to do,
             and the machine which requires a very specific input in order to do it. 
             </HeaderP>
           <HeaderP>   Teaching the AI what sort of commands it may be asked for, means it can 
              interpret the users natural language and pss an appropriate response the the application, in order to carry out their request.
            </HeaderP>
        </div>
   
      <VideoContainer> <DemoVid/> </VideoContainer>

      </UpperContainer>



      <LowerContainer>
      
        < InfoSection >
          <h3>Technical Considerations</h3>

          <p>Although primarily a JavaScript project, I chose to use a Java Spring API to manage interaction with the database as I had recently studied Spring
             and was very keen to deploy it in a project. Spring provided a neat, reliable way to creat the CRUD endpoints required.  </p>

<p>The back end runs on Node.js with an Express server, which is passed into an instance of socket.io to allow instant 2 way communication between
   the client and server via a web socket connection.    The server receives data from the client which i passed to an AI model,
    which has been directed to return in such a way that the response can be reliably parsed on the server side, providing instructions to manipulate the front end application.</p>

<p>On the front end we have a React application which uses speech recognition software to turn user’s verbal input to a string to be passed to the AI on the back end,
   and to convert string responses back into audible speech.   The useContext API was used to wire up these packages to the components that require them,
    avoiding extensive prop drilling.  UseContext was also deployed in combination with styledComponents theme provider to give users different visual accessibility options. </p>
        </InfoSection>

        < InfoSection >
          <h3>Professional Development</h3>

          <p><h5>How has this project helped me grow as a developer?</h5>  
          It gave me the chance to dig deeper into React’s Context API in this project.  Some components required access to the speech-to-text API to process voice input,
           while others required Speech Synthesis functionality to return audible output,  and others required a websocket connection to communicate with the back end,
            while all components were subject to theme toggling.  Using contexts to provide this state made the app so much cleaner and easier to work with.
              It also makes it so much easier to extend the project, as any components rendered within a given context can have access to that state. </p>

         <p>  It was also great to learn more about digital accessibility, including the use and expectations of screen readers, creating high contrast visual designs, and implementing full keyboard navigation.
            In addition to learning specific techniques to address these issues, I got a better understanding of the problems faced by a great many people in accessing the digital world,
             and it was exciting to leverage new technology in order to create solutions that could help people realise their potential.</p>
           
          <p> <h5>What were the hardest problems to overcome?</h5>One of the hardest things to get right was persuading the AI model to behave in a predictable way, and to handle its response correctly, as well as to handle it when it was less predictable.  Crashes and non responses are not a good user experience, so some workarounds were required to ensure the user would not be left hanging.</p>

          <p> <h5>What would I do differently if starting again today?</h5>I would think more carefully about design structure, particularly about maintaining loose couplings and separation of concerns.  e.g. the front end calls the DB API directly, and the next step for the data controller was for it also to interact  with the DB.  I feel, given what i have learned since, that it would be better for a function on the back end to handle all the DB calls and for it to communicate with other parts of the application.
        </p>
        </InfoSection>

        < InfoSection >
          <h3>Next Steps</h3>
          <p><h5>Improve AI </h5>  
          
          This project uses OpenAI's GPT3.5 turbo, the most advanced model available at time of building (June 2023). 
          For current requirements it is quite capable, LLMs will surely continue to improve over time, and so updatig the LLM may return benifits in the future.
</p>
<p> The AI is directed using a lengthy system prompt.  This adds additional tokens, and therefore cost, to every request.  More reliable results could be chieved, with lower overheads
          by training a model to respond as required.  The savings would be more significant if upgrading to a more powerful, and expensive model.
</p>

        <p> <h5>Further Extensions</h5> 
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