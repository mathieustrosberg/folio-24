"use client";
import { useState, useCallback } from "react";

import Close from "@/assets/svg/btn-close.svg";

import project1 from "@/assets/images/project-1.jpg";
import project2 from "@/assets/images/project-2.jpg";
import project3 from "@/assets/images/project-3.jpg";
import project4 from "@/assets/images/project-4.png";
import project5 from "@/assets/images/project-5.jpg";
import project6 from "@/assets/images/project-6.jpg";
import project1Image2 from "@/assets/images/projectImage2.jpg";
import project1Image3 from "@/assets/images/projectImage3.jpg";

const images = {
  Marvel: [project1],
  "Just you Coiffure": [project2],
  "Folio 2023": [project3],
  "Folio 2024": [project4],
  "ADM Concept Store": [project5],
  "Loon-Garden Restaurant": [project6, project1Image2, project1Image3],
};

function throttle(func, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    func(...args);
  };
}

const CardTilt = ({ project }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const onMouseMove = useCallback(
    throttle((e) => {
      const card = e.currentTarget;
      const box = card.getBoundingClientRect();
      const x = e.clientX - box.left;
      const y = e.clientY - box.top;
      const centerX = box.width / 2;
      const centerY = box.height / 2;
      const rotateX = (y - centerY) / 4;
      const rotateY = (centerX - x) / 4;

      setRotate({ x: rotateX, y: rotateY });
    }, 100),
    []
  );

  const onMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <>
      <div
        onClick={() =>
          document.getElementById(`my_modal_${project.name}`).showModal()
        }
        className="card relative h-52 md:w-52 transition-[all_400ms_cubic-bezier(0.03,0.98,0.52,0.99)_0s] will-change-transform"
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1, 1, 1)`,
          backgroundImage: `url(${images[project.name][0]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <dialog id={`my_modal_${project.name}`} className="modal">
        <div className="modal-box max-w-[740px] max-w-5xl p-7 md:p-24">
          <div className="modal-action">
            <form method="dialog">
              <button className="outline-none">
                <div className="bg-slate-100 rounded-full p-3">
                  <img className="w-6 h-auto" src={Close} alt="Close" />
                </div>
              </button>
            </form>
          </div>
          <h3 className="font-bold text-xl">{project.name}</h3>
          <p className="py-4">{project.description}</p>
          {project.link && (
            <>
              <a
                className="link"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Site Web
              </a>
              <br />
            </>
          )}
          {project.link_2 && (
            <>
              <a
                className="link"
                href={project.link_2}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <br />
            </>
          )}
          {images[project.name] &&
            images[project.name].map((image, index) => (
              <img
                key={index}
                className="rounded-lg w-auto h-auto mt-4 object-cover"
                src={image}
                alt={`Project ${project.name} image ${index + 1}`}
              />
            ))}
        </div>
      </dialog>
    </>
  );
};

export default CardTilt;
