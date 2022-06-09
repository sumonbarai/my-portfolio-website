import React from "react";

const ProjectRow = ({ project }) => {
  const { projectTitle, image } = project;
  return (
    <div className="col-lg-4 col-12 text-center">
      <div className="custom-card">
        <img className="img-fluid" src={image} alt="project" />
        <div className="overlay">
          <h3>{projectTitle}</h3>
          <button>live link</button>
          <button>Details</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectRow;
