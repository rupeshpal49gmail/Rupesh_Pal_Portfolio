import React from "react";
import project from "./data/projects.json";

const Projects = () => {
  return (
    <>
      <div className="container projects my-3">
        <h1>PROJECTS</h1>
        <div className="row">
          {project.map((data) => (
            <>
              <div key={data.id}>
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src={data.imageSrc}
                    className="card-img-top"
                    alt="img-break"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card Title</h5>
                    <p className="card-text">Some good example</p>
                    <a href="#" className="btn btn-primary">
                      Go Somewhere
                    </a>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
