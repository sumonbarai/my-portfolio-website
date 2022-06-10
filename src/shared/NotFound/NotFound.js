import React from "react";
import notFound from "../../assets/images/Notfound.jpg";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found">
      <img className="img-fluid" src={notFound} alt="not found page" />
    </div>
  );
};

export default NotFound;
