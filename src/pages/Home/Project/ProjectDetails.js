import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProjectDetails.css";

const ProjectDetails = () => {
  const [project, setProject] = useState({});
  const { id } = useParams();
  let projectOverview = [];
  let technology = [];
  if (project?.overview) {
    projectOverview = project?.overview;
  }
  if (project?.technology) {
    technology = project?.technology;
  }

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/sumonbarai/my-portfolio-website/main/public/projects.json"
    )
      .then((res) => res.json())
      .then((data) => {
        const matchProject = data.filter((project) => project._id === id);
        setProject(matchProject[0]);
      });
  }, [id]);

  return (
    <div className="product-details" style={{ background: "#F9F9FC" }}>
      <div className="header-bg"></div>
      <div className="container">
        <h2 className="section-title">Project Details Information</h2>
        <div className="row">
          <div className="col-lg-4 mb-4">
            <div className="photo">
              <img src={project.image1} alt="images" />
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="photo">
              <img src={project.image2} alt="images" />
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="photo">
              <img src={project.image3} alt="images" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h2 className="project-overview">Project overview</h2>
            <ul>
              {projectOverview.map((overview, index) => (
                <li key={index}>{overview}</li>
              ))}
            </ul>
            <h2 className="project-overview">Technology Used</h2>
            <div>
              {technology.map((a, index) => (
                <div key={index}>a</div>
              ))}
            </div>

            <div className="allLink">
              <a className="learn-btn" href={project.clientCode}>
                Client Side Code
              </a>
              <a className="learn-btn" href={project.serverCode}>
                server Side Code
              </a>
              <a className="learn-btn" href={project.liveLink}>
                live preview
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
