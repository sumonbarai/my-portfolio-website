import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectRow = ({ project }) => {
  let navigate = useNavigate();
  const { projectTitle, image, liveLink, _id } = project;
  const handleLiveLink = (url) => {
    window.open(url, "_blank");
  };
  const handleDetails = (_id) => {
    navigate(`/projectDetails/${_id}`);
  };
  return (
    <div className="col-lg-4 col-12 text-center">
      <div className="custom-card" data-aos="fade-up" data-aos-duration="2000">
        <img className="img-fluid" src={image} alt="project" />
        <div className="overlay">
          <h3>{projectTitle}</h3>
          <button onClick={() => handleLiveLink(liveLink)}>Live Preview</button>
          <button onClick={() => handleDetails(_id)}>Details</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectRow;
