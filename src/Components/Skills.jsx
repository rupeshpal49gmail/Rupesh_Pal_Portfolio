import React from "react";
import skills from "./data/skills.json";

const Skills = () => {
  return (
    <>
      <div className="container skills">
        <h1>SKILLS</h1>
        <div className="items">
          {skills.map((data) => (
            <>
              <div className="item" key={data.id}>
                <div className="progress-bar">
                  {" "}
                  <span id="pb-bcg"> 85%</span>
                </div>
                <img src={`/assets/${data.imageSrc}`} alt="img-break" />
                <h3>{data.title}</h3>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
