import React, { useState } from "react";
import "./BackToTop.css";
import { FaLongArrowAltUp } from "react-icons/fa";

const BackToTop = () => {
  const [show, setShow] = useState(false);
  window.addEventListener("scroll", () => {
    const scrollBar = window.scrollY;
    if (scrollBar > 500) {
      setShow(true);
    } else {
      setShow(false);
    }
  });

  const handleToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div
      id="backToTop"
      onClick={handleToTop}
      style={{ opacity: show ? "1" : "0" }}
    >
      <FaLongArrowAltUp className="arrow-icon"></FaLongArrowAltUp>
    </div>
  );
};

export default BackToTop;
