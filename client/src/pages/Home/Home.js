import React from "react";
import "./home.css";
import Typewriter from "typewriter-effect";
import Resume from '../../assets/Docs/Aadarsh_Resume.pdf'

const Home = () => {
  return (
    <>
      <div className="container-fluid home-container" >
        <div className="container home-content">
          <h2>Hi👋 I am Aadarsh Gupta</h2>
          <h1>
            <Typewriter
              options={{
                strings: [
                  "Full Stack developer !",
                  "Java Developer",
                  "MERN stack developer !",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="home-buttons">
            <button className="btn btn-hire">Hire-Me</button>
            <a className="btn btn-cv" href={Resume} download="Aadarsh_Resume.pdf">Resume</a>

          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
