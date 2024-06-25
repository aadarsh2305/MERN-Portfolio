import React from "react";
import "./Skills.css";
import { TechStack } from "../../utils/TechStack";

const Skills = () => {
  return (
    <>
      <div className="Skills">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">Skills</h2>
        <hr />
        <p className="pb-3 text-center">
          👉 including programming languages , frameworks, databseds , frontend
          and backend and apis
        </p>

        <div className="row">
          {TechStack.map((tech) => (
            <div key={tech.id} className="col-md-2">
              <div className="card m-2">
              <div className="card-content">
                <div className="card-body">
                  <div className="media d-flex justify-content-center">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="tech-icon"
                    />
                  </div>
                  <div className="media-body">
                    <h5>{tech.name}</h5>
                  </div>
                </div>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
