import React from "react";
import "./Footer.css";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";

const Footer = () => {
  return (
    <footer className="footer-area">
      <div className="container footer-flex d-flex justify-content-between align-items-center">
        <p>Created By Sumon Barai || All rights reserved.</p>
        <div className="social-link">
          <a href="https://www.facebook.com/sumonbarai78">
            <BsFacebook></BsFacebook>
          </a>
          <a href="https://twitter.com/sumonbarai78">
            <AiFillTwitterCircle></AiFillTwitterCircle>
          </a>
          <a href="https://www.linkedin.com/in/sumonbarai78/">
            <ImLinkedin></ImLinkedin>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
