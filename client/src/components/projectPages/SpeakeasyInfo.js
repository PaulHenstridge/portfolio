import styled from "styled-components";
import {Link} from "react-router-dom"
import DemoVid from "./DemoVid";



const Bg = styled.div`
    background-color: black;
    color:yellow;
`

const UpperContainer = styled.div`
    display: flex;
`
const LowerContainer = styled.div`
    display: flex;
    flex-direction: column;

`

const InfoSection = styled.section`
    background-color: gray;
    & > p{
      margin: 0.6rem;
    }
`


const SpeakeasyInfo = () => {
    return (<Bg>
      <h1>SpeakEasy Accessabillity Assistant</h1>
      
      <UpperContainer>
        <div> 
             <p> The aim of the SpeakEasy project was to explore the uses of AI to "round off the corners" of technologic interaction for the large proportion
        of people who have neurodivergant brains, do not process information in a way that machines expect.
      </p>

      <ol>
        <li>Technical COnsiderations</li>
        <li>Professional Development</li>
        <li>Next Steps</li>
      </ol>

        </div>
   
      <DemoVid></DemoVid>

      </UpperContainer>



      <LowerContainer>
      
        < InfoSection >
          <h3>Technical Considerations</h3>

          <p>I chose a Spring based API for the DB because I hd been studying Spring and was very keen to deploy it in a project.  Although the project was a JAvaScript one, the clean API format offered by Spring dovetailed neatly with the rest of the project.  </p>

<p>The back end runs on node with an express server, which is passed into an instance of socket.io to allow instant 2 way communication between the client and server, via a web socket connection.    The server receives data from the client which i passed to an AI model, which has been directed to return in such a way that the response can be reliably parsed on the server side, providing instructions to manipulate the front end application.</p>

<p>On the front end we have a React application which uses speech recognition software to turn user’s verbal input to a string to be passed to the AI on the back end, and to convert string responses back into audible speech.   The useContext API was used to wire up these packages to the components that require them, without the extensive prop drilling that would have been required.  UseContext was also deployed in combination with styledComponents theme provider to give users different visual accessibility options. </p>
        </InfoSection>

        < InfoSection >
          <h3>Professional Development</h3>

          <p><h5>How has this project helped me grow as a developer?</h5> I learned a lot about accessibility, including the use and requirements of screen readers, high contrast visual design, and keyboard navigation.  in addition to learning specific techniques to address these issues, i gained a better understanding of the problems faced by a great many people in accessing technology, and it was hugely rewarding to explore technological solutions to bring these people in and engage with technology in a way many of us take for granted.</p>
           
          <p> <h5>What were the hardest problems to overcome?</h5>one of the hardest things to get right was persuading the AI model to behave in a predictable way, and to handle its response correctly, as well as to handle it when it was less predictable.  Crashes and non responses are not a good user experience, so some workarounds were required to ensure the user would not be left hanging.
          [[show example of try-catch, and re-routing via conversation socket route]]</p>

          <p> <h5>What would I do differently if starting again today?</h5>I would think more carefully about design structure, particularly about maintaining loose couplings and separation of concerns.  e.g. the front end calls the DB API directly, and the next step for the data controller was for it also to interact  with the DB.  I feel, given what i have learned since, that it would be better for a central method or function or file (##????##) to handle all the DB calls and for it to communicate with other parts of the application.
        </p>
        </InfoSection>

        < InfoSection >
          <h3>Next Steps</h3>
          <p><h5></h5>Improve AI - train a model

SO many exciting possibilities fo this sort of approach, and as AI develops a lot of the issues of data manipulation will be easier to handle…


extensions or other applications for this sort of app:

integrate with email, sms, WhatsApp etc
assisted dictation of emails documents etc
translation
tech assisted home help
learning assistant
</p>
        </InfoSection>
      
      </LowerContainer>

   

      

    <Link to="/">Back to Projects</Link>
    </Bg>)
        
     
}
 
export default SpeakeasyInfo;