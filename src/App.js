import logo from './logo.svg';
import './App.css';
import Waiting from './components/Waiting';
import HeroHeader from './components/HeroHeader';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Experience from './components/Experience';
import ScrollNav from './components/ScrollNav';

function App() {
    return (
        <div className="App">
            <ScrollNav />
            <HeroHeader />
            <AboutMe />
            <Projects />
            <Experience />
            <Contact />
        </div>
    );
}

export default App;
