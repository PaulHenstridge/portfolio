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
      text-shadow:0.3px 0.3px #81777777;
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
            An API of awesome software development learning resources published by the FreeCodeCamp commmuity.
               This app takes all of that amazing information and makes it fully searchable,
                with AI generated tags allowing for advanced searching within articles.
             </HeaderP>
        </div>
      <DemoVid/> 
      </UpperContainer>

      <LowerContainer>  
        < InfoSection >
        <p>
        As a subscriber to the weekly newsletter of articles and tutorials from Quincy Larson of FreeCodeCamp,
              I was excited to discover there was a json archive of all the urls shared over the years,
               as this could be made into a great API.  <br></br><br></br>

        <h4> The objectives of this project:</h4>
        <ul>
            <li>
                to explore python’s module system, and its ecosystem of packages, 
                by building a functional, useful API.
            </li>
            <li>
                to write clean, DRY code that adheres to industry best practice - scalable and maintainable.
            </li>
            <li>
                to push my comfort zone and develop greater fluency in python.
             </li>
        </ul>      


            <h5>Features: </h5>
 All the good shizzles
               </p>

          <h3>Technical Considerations</h3>

          <p>
This application is built with Python, uses AI to create searchable content tags for every article,
 stores them in a MongoDB database, and makes the articles available through a suite of RESTful endpoints.
   A simple front end allows users to query and explore the data from the browser.<br></br><br></br>

   This app was built using the Python module system, in the application factory pattern.
     In this pattern, a runner file that is outside the main project directory instantiates
      and runs an instance of the app.  This offers great flexibility to initialise the app
       with different configurations and data, making it highly scalable.<br></br><br></br>

It connects to a MongoDB non-relational database using the pymongo library to manage interactions,
 and mongoengine, an Object-Document Mapper, to create database schemas and interact with
  them easily using Python.<br></br><br></br>

The front end is a simple HTML page with CSS and JavaScript, which allows users
 the opportunity to query the API.  This simple front end configuration is more
  than enough to fulfil these requirements, and allow the entire application to
   be deployed as one unified project.

          </p>


        </InfoSection>

        < InfoSection >
          <h3>Professional Development</h3>

          <p><h4>How has this project helped me grow as a developer?</h4>  
          <h5>python problem solving</h5>

          
This project threw up lots if different challenges, and finding ways to solve them using
 Python really helped develop my skills.  These included handling inconsistent fields
  in the data [[show flexible_strptime method in get_data]], 
   controlling the flow of data to an external API using a rate limiter
    [[ show rate limiter in add_content_tags ]]  
    and sanitising the AI response data before adding it to the database.[[ show sanitising code]].
     </p>
             
         <p> <h5>Style Guide</h5>
         
The style guide published by FreeCodeCamp made choosing colours and fonts really easy,
 but what that ought me was the value of a well thought out style guide,
  that allows future developers to maintain the look and feel of the application.
    I was less than happy with the CSS in my previous python project. 
     This style guide has given me a great tool to learn from and produce more
      thought out and extendable css styles.</p>
           
           <p><h5> Accidental Learning</h5>
          There are somany fascinating articles in this collection I learned something every time I tested an endpoint!
</p>

          <p> <h4>What were the hardest problems to overcome?</h4>
          The most troublesome issue resulted from one of the routes not returning the expected data. 
          I was eventually able to pinpoint the issue to within the mongoengine library,
           but this gave me an important decision to make:  take a deep dive into the internal workings
            of the library, or find an alternative solution and maintain the momentum of the project.
            <br></br><br></br>
Considering agile principles, which advocate for adaptability and delivering working software on time,
 I explored a workaround, using python to manipulate the data as required. 
  [[ show python workaround line 150 in link_controller ]]
  <br></br><br></br>
A more uniform approach using mongoengine remains an objective,
 but by applying agile thinking I was able to move forward and deliver a working project,
  ask well as develop my problem solving skills.
</p>

          <p> <h4>What would I do differently if starting again today?</h4>
          If restarting this project today, with the knowledge I now have, I would look at using a more
           powerful AI model to provide content tags.  The decision was largely driven by cost.
            Processing all the articles with GPT3.5 in September 2023 cost $9, and to use GPT4 would 
            have cost $180.  <br></br>As of November 2023, token prices for GPT4 have fallen considerably,
             pricing the same operation closer to $60, and this trend will likely continue.
               A more intuitive model would improve the quality of tagging and reduce the need
                for sanitisation.<br></br><br></br>

To increase my exposure to the python ecosystem, I might consider exploring 
the Django framework as an alternative to Flask. 
Although this project is fairly simple in its current state, there are many exciting opportunities to
 extend it. As the project grows, Django's comprehensive set of features could offer more built-in tools
  and functionalities that are ideal for larger-scale applications.


        </p>
        </InfoSection>

        < InfoSection >
          <h3>Next Steps</h3>

          
          <p><h5>Expanded front end application</h5>  
      

The front end could be developed as a means of interacting with the content. 
  Effectively a separate application that consumes the API, 
   it could facilitate:
   <ul>
    <li>User profiles</li>
    <li>Search history</li>
    <li>Favourite articles</li>
    <li>Accessibility preferencess</li>
    <li>User profiles</li>
    <li>Document reader</li>
   </ul>
</p>
        </InfoSection>
      
      </LowerContainer>

    <ReturnLink to="/"> Back to Projects</ReturnLink>
    </Bg>)
        
     
}
 
export default QuincyInfo;