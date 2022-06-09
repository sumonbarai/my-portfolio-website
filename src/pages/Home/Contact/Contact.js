import React from "react";
import "./Contact.css";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { ImLocation } from "react-icons/im";

const Contact = () => {
  return (
    <div
      className="contact-area section-padding"
      id="contact"
      style={{ background: "#F9F9FC" }}
    >
      <div className="container">
        <h2 className="section-title">contact us</h2>
        <div className="row g-4 align-items-center">
          <div className="col-lg-6 p-4">
            <div className="contact-information">
              <h3>Let's discuss your project</h3>
              <div className="contact-info">
                <div className="mobile d-flex align-items-center">
                  <div className="fs-1 me-4">
                    <FiPhoneCall className="color"></FiPhoneCall>
                  </div>
                  <a href="tel:+8801815223111">+8801815223111</a>
                </div>
                <div className="email d-flex align-items-center">
                  <div className="fs-1 me-4">
                    <MdOutlineMarkEmailRead className="color"></MdOutlineMarkEmailRead>
                  </div>
                  <a href="mailto:sumonbarai78@gmail.com">
                    sumonbarai78@gmail.com
                  </a>
                </div>
                <div className="location d-flex align-items-center">
                  <div className="fs-1 me-4">
                    {" "}
                    <ImLocation className="color"></ImLocation>
                  </div>
                  <span className="text-capitalize">
                    Purba baniya khamer , <br />
                    khulna, bangladesh
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 p-4">
            <div className="contact-form">
              <p className="form-heading">
                I'm always open to discussing product design work or
                partnerships.
              </p>
              <form>
                <input type="text" placeholder="Name *" />
                <input type="email" placeholder="Email *" />
                <input type="text" placeholder="Subject *" />
                <textarea type="text" rows="2" placeholder="Message *" />

                <input type="submit" value="Submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
