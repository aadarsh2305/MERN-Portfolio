import './App.css';
import Layout from './components/Layout/Layout';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Education from './pages/Education/Education';
import Projects from './pages/Projects/Projects';
import Skills from './pages/Skills/Skills';
import WorkExperience from './pages/WorkExp/WorkExperience';
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <>
      <Layout />
      <div className='container'><About/></div>
      <Education />
      <Skills />
      <Projects />
      <WorkExperience />
      <Contact />
      <ScrollToTop smooth color='#f29f67' style={{backgroundColor:'#1e1e2c', borderRadius:'80px',marginRight:'-20px'}}/>
    </>
  );
}

export default App;