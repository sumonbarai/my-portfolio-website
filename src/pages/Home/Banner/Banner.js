import React from "react";
import "./Banner.css";
import Typewriter from "typewriter-effect";

const Banner = () => {
  const handleDownload = () => {
    const url =
      "https://drive.google.com/file/d/1Gl-DPVKovvFehFqvDYdwkHemcmpIjFiu/view?usp=sharing";
    window.open(url, "_black");
  };
  return (
    <div className="banner">
      <div className="container banner-area d-flex justify-content-center align-items-center">
        <div className="banner-text px-3">
          <span>Hello, I'm Sumon</span>
          <div className="type-text d-flex justify-content-center m fw-bold">
            <div>I'm a&nbsp;</div>
            <Typewriter
              options={{
                strings: [
                  " Front End developer.",
                  " React Developer.",
                  " Web Developer.",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <p className="mb-5">
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services and
            online stores.
          </p>
          <button className="banner-btn" onClick={handleDownload}>
            download cv
          </button>
        </div>
        <div className="custom-shape-divider-bottom-1654717633">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Banner;
