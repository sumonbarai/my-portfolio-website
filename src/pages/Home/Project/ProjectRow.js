import React from "react";

const ProjectRow = ({ project }) => {
  const { projectTitle, image, liveLink } = project;
  const handleLiveLink = (url) => {
    window.open(url, "_blank");
  };
  return (
    <div className="col-lg-4 col-12 text-center">
      <div className="custom-card">
        <img className="img-fluid" src={image} alt="project" />
        <div className="overlay">
          <h3>{projectTitle}</h3>
          <button onClick={() => handleLiveLink(liveLink)}>live link</button>
          <button>Details</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectRow;
