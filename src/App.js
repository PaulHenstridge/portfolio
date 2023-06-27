import logo from './logo.svg';
import './App.css';
import Waiting from './components/Waiting';
import HeroHeader from './components/HeroHeader';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
    return (
        <div className="App">
            <HeroHeader />
            <AboutMe />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;
