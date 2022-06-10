import React, { useEffect, useState } from "react";
import "./Project.css";

import ProjectRow from "./ProjectRow";

const Project = () => {
  const [information, setInformaiton] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/sumonbarai/my-portfolio-website/main/public/projects.json"
    )
      .then((res) => res.json())
      .then((data) => setInformaiton(data));
  }, []);
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
