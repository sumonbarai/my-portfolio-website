import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { ImLocation } from "react-icons/im";

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cumybbe",
        "template_slxjhzi",
        form.current,
        "Acx30sMmjOch4WyWQ"
      )
      .then(
        (result) => {
          if (result.text) {
            setSuccess(true);
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setTimeout(() => {
      setSuccess(false);
    }, 5000);
  };

  return (
    <div
      className="contact-area section-padding"
      id="contact"
      style={{ background: "#F9F9FC" }}
    >
      <div className="container" data-aos="fade-up" data-aos-duration="2000">
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
              <form ref={form} onSubmit={sendEmail}>
                <input type="text" required placeholder="Name *" name="name" />
                <input
                  type="email"
                  required
                  placeholder="Email *"
                  name="email"
                />
                <input
                  type="text"
                  required
                  placeholder="Subject *"
                  name="subject"
                />
                <textarea
                  type="text"
                  rows="2"
                  required
                  placeholder="Message *"
                  name="message"
                />

                <input type="submit" value="Submit" />
                {success && (
                  <p className="success-message">
                    Your message has been send successfully
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
