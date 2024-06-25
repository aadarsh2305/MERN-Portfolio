import React from "react";
import "./Menu.css";
import { FcHome,FcAbout,FcBiotech,FcReading, FcPortraitMode, FcWorkflow, FcBusinessContact } from "react-icons/fc";

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
                <div className="nav-link"><FcHome/>Home</div>
                <div className="nav-link"><FcAbout/>About</div>
                <div className="nav-link"><FcReading/>Education</div>
                <div className="nav-link"><FcBiotech/>Skills</div>
                <div className="nav-link"><FcWorkflow/>Projects</div>
                <div className="nav-link"><FcPortraitMode/>Work Experience</div>
                <div className="nav-link"><FcBusinessContact/>Contact</div>
                
            </div>
          </div>
        </>
      ) : (
        <>
        <h6 className="text-center" style={{color:'white'}}>Icons</h6>
        <div className="nav-items">
            <div className="nav-item">
                <div className="nav-link"><FcHome title="HOME"/></div>
                <div className="nav-link"><FcAbout title="ABOUT"/></div>
                <div className="nav-link"><FcReading title="EDUCATION"/></div>
                <div className="nav-link"><FcBiotech title="SKILLS"/></div>
                <div className="nav-link"><FcWorkflow title="PROJECTS"/></div>
                <div className="nav-link"><FcPortraitMode title="WORK EXPERIENCE"/></div>
                <div className="nav-link"><FcBusinessContact title="CONTACT"/></div>
            </div>
          </div>
          </>
      )}
    </>
  );
};

export default Menu;
