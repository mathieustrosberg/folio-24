import React from "react";
import CardTilt from "@/composants/CardTilt";

import projectsData from "@/data/projectsData.json";

import project1 from "@/assets/images/project-1.jpg";
import project2 from "@/assets/images/project-2.jpg";
import project3 from "@/assets/images/project-3.jpg";

const images = {
  Marvel: project1,
  "Just you Coiffure": project2,
  "ABGS Pétanque": project3,
};

const Projects = () => {
  return (
    <div className="flex md:flex-row flex-col gap-10">
      <h2 className="flex flex-col h-100 w-5/12 gap-10 text-sm">Projets</h2>
      <div className="flex flex-col md:flex-row md:flex-wrap md:w-9/12 leading-7 gap-6 text-sm">
        {projectsData.map((project) => (
          <CardTilt
            key={project.name}
            project={{ ...project, image: images[project.name] }}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
