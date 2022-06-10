import React from "react";
import "./About.css";
import aboutImg from "../../../assets/images/about_me.png";

const About = () => {
  return (
    <div
      className="about-area section-padding"
      id="about"
      style={{ background: "#F9F9FC" }}
    >
      <div className="container">
        <h2 className="section-title">about me</h2>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="left-area">
              <img className="img-fluid" src={aboutImg} alt="about me" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="right-area pt-4">
              <h6>Who am i?</h6>
              <h2>Jr. Web Developer</h2>
              <p>
                I am Web Developer.I use React.js , Node.js , Express.js and
                MongoDB as a database for full stack project. Behind i learn,
                practice and implement html5, css3, bootstrap, tailwind,
                JavaScript to develop front end web application.
              </p>
              <div className="personal-information mt-5">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-sm-12">
                    <p>
                      Name: <span>Sumon Barai</span>
                    </p>
                  </div>
                  <div className="col-lg-6 col-sm-12">
                    <p>
                      Eduction: <span>MBA (Hon's) at National University</span>
                    </p>
                  </div>
                  <div className="col-lg-6 col-sm-12">
                    <p>
                      Phone: <span>+88018152232111</span>
                    </p>
                  </div>
                  <div className="col-lg-6 col-sm-12">
                    <p>
                      Email: <span>sumonbarai78@gmail.com</span>
                    </p>
                  </div>
                  <div className="col-lg-6 col-sm-12">
                    <p>
                      Address: <span>Khulna, Bangladesh</span>
                    </p>
                  </div>
                </div>
              </div>
              <a
                className="learn-btn"
                href="https://www.linkedin.com/in/sumonbarai78/"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
