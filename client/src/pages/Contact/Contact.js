import React from "react";
import "./Contact.css";
import Instagram from "../../assets/Social Logo/Instagram.png";
import Linkedin from "../../assets/Social Logo/Linkedin.png";
import Twitter from "../../assets/Social Logo/Twitter.png";
import Github from "../../assets/Social Logo/Github.png";

const Contact = () => {
  return (
    <>
      <div className="container contact" id="contactId">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            <div className="card0 border-0">
              <div className="row">
                <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                  <div className="card1">
                    <div className="row border-line">
                      {/* Contact Information Section */}
                      <div className="contact-info">
                        <h2>Contact Information</h2>
                        <p>
                          Please fill out the form to get in touch with me. I will
                          get back to you as soon as possible.
                        </p>
                        <ul>
                          <li>Email: adarshgupta91111@gmail.com</li>
                          <li>Indore, Madhya Pradesh, INDIA</li>
                        </ul>
                        <br /> <br />
                        <div className="reach-out-section d-flex flex-column flex-md-row align-items-center justify-content-center align-items-md-center mb-6">
                          <p className="reach-out text-lg mb-4 mb-md-0">
                            <b>Reach out to me:</b>
                          </p>
                          <div className="social-icons">
                            {/* Social Media Links */}
                            <a
                              href="https://www.linkedin.com/in/aadarshgupta2305/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mx-2"
                            >
                              <img
                                src={Linkedin}
                                alt="Linkedin"
                                className="social-icon"
                              />
                            </a>
                            <a
                              href="https://x.com/Aadarsh_Gupta91"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mx-2"
                            >
                              <img
                                src={Twitter}
                                alt="Twitter"
                                className="social-icon"
                              />
                            </a>
                            <a
                              href="https://instagram.com/aadarsh_gupta91"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mx-2"
                            >
                              <img
                                src={Instagram}
                                alt="Instagram"
                                className="social-icon"
                              />
                            </a>
                            <a
                              href="https://github.com/aadarsh2305"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mx-2"
                            >
                              <img
                                src={Github}
                                alt="Github"
                                className="social-icon"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="card-body">
                    {/* Contact Form */}
                    <form>
                      <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Enter your name"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Enter your email"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input
                          type="tel"
                          className="form-control"
                          id="phone"
                          placeholder="Enter your phone number"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                          className="form-control"
                          id="message"
                          rows="4"
                          placeholder="Enter your message"
                        ></textarea>
                      </div>
                      <button type="submit" className="btn btn-primary btn-block">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
