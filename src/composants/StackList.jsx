import React from "react";

import SeparatorSVG from "./SeparatorSVG";

const StackList = ({ className }) => {
  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "Tailwind",
    "Figma",
    "Photoshop",
    "Illustrator",
    "JavaScript",
    "React",
    "Node.js",
    "Tailwind",
    "Figma",
    "Photoshop",
    "Illustrator",
  ];
  return (
    <div className="scrolling-message-container">
      <div className="scrolling-message-right">
        <h2 className="list-stack">
          {skills.map((skill, index) => (
            <React.Fragment key={index}>
              <span className={index % 2 === 0 ? "highlight" : ""}>
                {skill}
              </span>
              {index < skills.length - 1 && <SeparatorSVG />}
            </React.Fragment>
          ))}
        </h2>
      </div>
      <div className="scrolling-message-left">
        <h2 className="list-stack">
          {skills.map((skill, index) => (
            <React.Fragment key={index}>
              <span className={index % 2 === 0 ? "highlight" : ""}>
                {skill}
              </span>
              {index < skills.length - 1 && <SeparatorSVG />}
            </React.Fragment>
          ))}
        </h2>
      </div>
      <div className="scrolling-message-right">
        <h2 className="list-stack">
          {skills.map((skill, index) => (
            <React.Fragment key={index}>
              <span className={index % 2 === 0 ? "highlight" : ""}>
                {skill}
              </span>
              {index < skills.length - 1 && <SeparatorSVG />}
            </React.Fragment>
          ))}
        </h2>
      </div>
    </div>
  );
};

export default StackList;
