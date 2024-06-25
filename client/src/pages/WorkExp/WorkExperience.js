import React from "react";
import "./WorkExperience.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { BsPersonWorkspace } from "react-icons/bs";

const WorkExperience = () => {
  return (
    <>
      <div className="work">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work Experience
          </h2>
          <hr />
          <VerticalTimeline lineColor="#1e1e2c">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{ borderRight: "7px solid white" }}
              date={
                <span style={{ color: "black" }} className="text-uppercase">
                  July 2023 - present
                </span>
              }
              iconStyle={{ background: "#138781", color: "white" }}
              icon={<BsPersonWorkspace />}
            >
              <h4 className="vertical-timeline-element-title">
                Associate Software Engineer
              </h4>
              <br />
              <h5 className="vertical-timeline-element-subtitle">
                Prolifics Incorporation
              </h5>
              <h6 className="vertical-timeline-element-subtitle">
                Hyderabad, Telangana
              </h6>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{ borderRight: "7px solid white" }}
              date={
                <span style={{ color: "#1e1e2c"}} className="text-uppercase">
                  December 2022 - May 2023
                </span>
              }
              iconStyle={{ background: "#138781", color: "white" }}
              icon={<BsPersonWorkspace />}
            >
              <h4 className="vertical-timeline-element-title">
                Java Developer
              </h4>
              <br />
              <h5 className="vertical-timeline-element-subtitle">
                Aixtor Technology
              </h5>
              <h6 className="vertical-timeline-element-subtitle">
                Ahmedabad, Gujarat
              </h6>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExperience;
