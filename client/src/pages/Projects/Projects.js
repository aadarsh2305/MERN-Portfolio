import React from "react";
import "./Projects.css";
import DisneycloneScreenshot from '../../assets/Images/Disney-clone.png'
import employeemanagementsystem from '../../assets/Images/employee-management-system-pic.jpg'

const Projects = () => {
  return (
    <>
      <div className="project">
      <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">Top Recent Projects</h2>
        <hr />
        <p className="pb-3 text-center">
          👉 Here are my top 3 recent projects with live links and source code 
        </p>

        {/* card design  */}
        <div className="container row" id="ads">
            {/* First Project */}
            <div className="col-md-4">
                <div className="card rounded">
                    <div className="card-image">
                        <span className="card-notify-badge">Frontend Project</span>
                        <img src={DisneycloneScreenshot} alt="dinsey-clone-project"/>
                    </div>
                    <div className="card-image-overly m-auto mt-3">
                        <span className="card-detail-badge">React</span>
                        <span className="card-detail-badge">TailwindCSS</span>
                        <span className="card-detail-badge">Vite</span>
                    </div>
                    <div className="card-body text-center">
                        <div className="ad-title m-auto">
                            <h5 className="text-uppercase">
                                Disney-Clone Website
                            </h5>
                        </div>
                        <div className="ad-btn-group">
                        <a className="ad-btn" href="https://disney-clone-addy.vercel.app/">View</a>
                        <a className="ad-btn" href="https://github.com/aadarsh2305/Disney-clone.git">Source Code</a>
                        </div>

                    </div>
                </div>
            </div>

            {/* Second Project */}
            <div className="col-md-4">
                <div className="card rounded">
                    <div className="card-image">
                        <span className="card-notify-badge">Full Stack Project</span>
                        <img src={employeemanagementsystem} alt="employee-management-project"/>
                    </div>
                    <div className="card-image-overly m-auto mt-3">
                        <span className="card-detail-badge">React</span>
                        <span className="card-detail-badge">Java</span>
                        <span className="card-detail-badge">Springboot</span>
                        <span className="card-detail-badge">MySQL</span>
                    </div>
                    <div className="card-body text-center">
                        <div className="ad-title m-auto">
                            <h6 className="text-uppercase">
                                Employee Management System
                            </h6>
                        </div>
                        <div className="ad-btn-group">
                        <a className="ad-btn" href="#">View</a>
                        <a className="ad-btn" href="https://github.com/aadarsh2305/Employee-management-system.git">Source Code</a>
                        </div>

                    </div>
                </div>
            </div>

            {/* Third Project */}
            <div className="col-md-4">
                <div className="card rounded">
                    <div className="card-image">
                        <span className="card-notify-badge">Frontend Project</span>
                        <img src={DisneycloneScreenshot} alt="dinsey-clone-project"/>
                    </div>
                    <div className="card-image-overly m-auto mt-3">
                        <span className="card-detail-badge">React</span>
                        <span className="card-detail-badge">TailwindCSS</span>
                        <span className="card-detail-badge">Vite</span>
                    </div>
                    <div className="card-body text-center">
                        <div className="ad-title m-auto">
                            <h5 className="text-uppercase">
                                Disney-Clone Website
                            </h5>
                        </div>
                        <div className="ad-btn-group">
                        <a className="ad-btn" href="#">View</a>
                        <a className="ad-btn" href="#">Source Code</a>
                        </div>

                    </div>
                </div>
            </div>

        </div>
      </div>
    </>
  );
};

export default Projects;
