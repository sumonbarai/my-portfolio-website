import React from "react";
import { FiPhoneCall } from "react-icons/fi";

const Contact = () => {
  return (
    <div
      className="contact-area section-padding"
      id="contact"
      style={{ background: "#F9F9FC" }}
    >
      <div className="container">
        <h2 className="section-title">contact us</h2>
        <div className="row">
          <div className="col-lg-6">
            <div className="contact-information">
              <h3>Let's discuss your project</h3>
              <div className="icon">
                <FiPhoneCall></FiPhoneCall>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contact-form">contact information</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
