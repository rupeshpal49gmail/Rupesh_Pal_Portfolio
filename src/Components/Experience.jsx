import React from "react";
import experience from "./data/experience.json";

export const Experience = () => {
  return (
    <>
      <div className="container exp">
        <h1>EXPERIENCE</h1>
        {experience.map((data) => {
          return (
            <div>
              <div key={data.id} className="exp-items text-center my-5">
                <div className="left">
                  <img src={`/assets/${data.imageSrc}`} alt="Image-break" />
                </div>
                <div className="right">
                  <h2>{data.role}</h2>
                  <h4>
                    <span style={{ color: "yellowgreen" }}>
                      {data.startDate}
                    </span>{" "}
                    <span style={{ color: "yellowgreen" }}>{data.endDate}</span>{" "}
                    <span style={{ color: "orange" }}>{data.location}</span>
                  </h4>
                  <h5 style={{ color: "orange" }}>{data.experience[0]}</h5>
                  <h5 style={{ color: "orange" }}>{data.experience[1]}</h5>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
