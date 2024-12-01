import React from "react";
import experience from "./data/experience.json";

export const Experience = () => {
  return (
    <div>
      <div className="container exp">
        <h1>EXPERIENCE</h1>
        {experience.map((data) => {
          return (
            <div>
              <div key={data.id} className="exp-items">
                <div className="left">
                  <img src={`../assets/organization/${data.imageSrc}`} alt="" />
                </div>
                <div className="right">
                  <h2>{data.role}</h2>
                  <h4>
                    {data.startDate} {data.endDate} {data.location}
                  </h4>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
