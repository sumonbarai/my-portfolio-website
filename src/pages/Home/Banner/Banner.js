import React from "react";
import "./Banner.css";
import Typewriter from "typewriter-effect";

const Banner = () => {
  const handleDownload = () => {
    const url =
      "https://drive.google.com/file/d/11cIzIE30q0-f06HMIAkO5oeypMc_4Y-y/view?usp=sharing";
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
        {/* shapes */}
        <div className="custom-shape-divider-bottom-1654854612">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Banner;
