import React from "react";
import "./Project.css";
import project1 from "../../../assets/images/project-01.jpg";
import project2 from "../../../assets/images/project-02.jpg";
import project3 from "../../../assets/images/project-03.png";
import ProjectRow from "./ProjectRow";

const Project = () => {
  const information = [
    { projectTitle: "Electric Manufacture", image: project1 },
    { projectTitle: "Laptop-Warehouse", image: project2 },
    { projectTitle: "Body-Fitness", image: project3 },
    { projectTitle: "Electric Manufacture", image: project1 },
    { projectTitle: "Laptop-Warehouse", image: project2 },
    { projectTitle: "Body-Fitness", image: project3 },
  ];
  return (
    <div className="project-area section-padding" id="project">
      <div className="container">
        <h2 className="section-title">my project</h2>
        <div className="row g-5">
          {information.map((project, index) => (
            <ProjectRow project={project} key={index}></ProjectRow>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
