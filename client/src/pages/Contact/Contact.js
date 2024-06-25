import React from "react";
import "./Contact.css";
import contactmeimageLogo from '../../assets/Images/Contact-me-image.jpg';

const Contact = () => {
  return (
    <>
      <div className="container contact">
        <div className="card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xk-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  {/* <img src={contactmeimageLogo} alt="contact-form" /> */}
                  <div className="contact-info">
                  <h2>Contact Information</h2>
                  <p>Please fill out the form to get in touch with me. I will get back to you as soon as possible.</p>
                  <ul>
                    <li>Email: adarshgupta91111@gmail.com</li>
                    <li>Indore, Madhya Pradesh, INDIA</li>
                  </ul>
                </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card-body">
                {/* <h5 className="card-title text-center">Contact Me</h5> */}
                <form>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea className="form-control" id="message" rows="4" placeholder="Enter your message"></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
