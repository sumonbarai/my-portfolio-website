import React from "react";
import BackToTop from "../../../shared/BackToTop/BackToTop";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";
import Project from "../Project/Project";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Project></Project>
      <About></About>
      <Blog></Blog>
      <Contact></Contact>
      <BackToTop></BackToTop>
    </div>
  );
};

export default Home;
