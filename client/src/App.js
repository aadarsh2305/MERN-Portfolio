import './App.css';
import Layout from './components/Layout/Layout';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Education from './pages/Education/Education';
import Projects from './pages/Projects/Projects';
import Skills from './pages/Skills/Skills';
import WorkExperience from './pages/WorkExp/WorkExperience';

function App() {
  return (
    <div>
      <Layout />
      <div className='container'><About/></div>
      <Education />
      <Skills />
      <Projects />
      <WorkExperience />
      <Contact />
    </div>
  );
}

export default App;