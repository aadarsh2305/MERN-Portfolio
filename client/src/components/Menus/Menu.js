import React from "react";
import "./Menu.css";
import { FcHome,FcAbout,FcBiotech,FcReading, FcPortraitMode, FcWorkflow, FcBusinessContact } from "react-icons/fc";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

const Menu = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <div className="navbar-profile-pic">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&s"
              alt="Profile pic"
            />
          </div>
          <div className="nav-items">
            <div className="nav-item">
                <div className="nav-link"><Link to="homeId" spy={true} smooth={true} offset={-100} duration={100}><FcHome/>Home</Link></div>
                <div className="nav-link"><Link to="aboutId" spy={true} smooth={true} offset={-100} duration={100}><FcAbout/>About</Link></div>
                <div className="nav-link"><Link to="educationId" spy={true} smooth={true} offset={-100} duration={100}><FcReading/>Education</Link></div>
                <div className="nav-link"><Link to="skillsId" spy={true} smooth={true} offset={-100} duration={100}><FcBiotech/>Skills</Link></div>
                <div className="nav-link"><Link to="projectsId" spy={true} smooth={true} offset={-100} duration={100}><FcWorkflow/>Projects</Link></div>
                <div className="nav-link"><Link to="workexpId" spy={true} smooth={true} offset={-100} duration={100}><FcPortraitMode/>Work Experience</Link></div>
                <div className="nav-link"><Link to="contactId" spy={true} smooth={true} offset={-100} duration={100}><FcBusinessContact/>Contact</Link></div>
                
            </div>
          </div>
        </>
      ) : (
        <>
        <h6 className="text-center" style={{color:'white'}}>Icons</h6>
        <div className="nav-items">
            <div className="nav-item">
                <div className="nav-link"><Link to="homeId" spy={true} smooth={true} offset={-100} duration={100}><FcHome title="HOME"/></Link></div>
                <div className="nav-link"><Link to="aboutId" spy={true} smooth={true} offset={-100} duration={100}><FcAbout title="ABOUT"/></Link></div>
                <div className="nav-link"><Link to="educationId" spy={true} smooth={true} offset={-100} duration={100}><FcReading title="EDUCATION"/></Link></div>
                <div className="nav-link"><Link to="skillsId" spy={true} smooth={true} offset={-100} duration={100}><FcBiotech title="SKILLS"/></Link></div>
                <div className="nav-link"><Link to="projectsId" spy={true} smooth={true} offset={-100} duration={100}><FcWorkflow title="PROJECTS"/></Link></div>
                <div className="nav-link"><Link to="workexpId" spy={true} smooth={true} offset={-100} duration={100}><FcPortraitMode title="WORK EXPERIENCE"/></Link></div>
                <div className="nav-link"><Link to="contactId" spy={true} smooth={true} offset={-100} duration={100}><FcBusinessContact title="CONTACT"/></Link></div>
            </div>
          </div>
          </>
      )}
    </>
  );
};

export default Menu;
