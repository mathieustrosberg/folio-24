import React from "react";
import CardTilt from "@/composants/CardTilt";

import projectsData from "@/data/projectsData.json";

const Projects = () => {
  return (
    <div className="flex md:flex-row flex-col gap-10">
      <h2 className="flex flex-col h-100 w-5/12 gap-10 text-sm">Projets</h2>
      <div className="flex flex-col md:flex-row md:flex-wrap md:w-9/12 leading-7 gap-6 text-sm">
        {projectsData.map((project) => (
          <CardTilt loading="lazy" key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
