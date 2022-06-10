import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProjectDetails.css";

const ProjectDetails = () => {
  const { id } = useParams();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);
  return (
    <div className="product-details">
      <div className="header-bg"></div>
      <div className="container">
        <h2 className="section-title">Project Details Information</h2>
      </div>
      <h1>this is product</h1>
    </div>
  );
};

export default ProjectDetails;
