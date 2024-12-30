import React from "react";
import project from "./data/projects.json";

const Projects = () => {
  return (
    <>
      <div className="container projects my-3">
        <h1>PROJECTS</h1>
        <div className="row display-flex justify-center align-content-center">
          {project.map((data) => (
            <>
              <div
                key={data.id}
                className="my-3 col-sm-3 col-md-4 col-lg-4 col-xl-3"
              >
                <div
                  className="card bg-dark text-light"
                  style={{ width: "18rem" }}
                >
                  <img
                    src={data.imageSrc}
                    className="card-img-top"
                    alt="img-break"
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{data.title}</h5>
                    <p className="card-text">{data.description}</p>
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
