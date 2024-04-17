import React from "react";
import profilePicture from "@/assets/images/me.jpg";
import Icon from "@/assets/svg/icon.svg";

const ProfileCard = () => {
  return (
    <div className="flex md:flex-row flex-col gap-10">
      <div className="flex flex-col h-100 md:w-5/12 gap-10">
        <div>
          <h1 className="text-base font-medium">M — S</h1>
          <p className="text-sm">Dunkerque, FR</p>
        </div>
        <div>
          <div className="flex flex-row items-center space-x-1 text-sm">
            <button className="action-link">
              <a href="mailto:contact@mathieustrosberg.com">Mail</a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                viewBox="0 0 24 24"
              >
                <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
              </svg>
            </button>
          </div>
          <div className="flex flex-row items-center space-x-1 text-sm">
            <button className="action-link">
              <a
                href="https://www.linkedin.com/in/mathieu-strosberg/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                viewBox="0 0 24 24"
              >
                <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
              </svg>
            </button>
          </div>
          <div className="flex flex-row items-center space-x-1 text-sm">
            <button className="action-link">
              <a
                href="https://github.com/mathieustrosberg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                viewBox="0 0 24 24"
              >
                <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
              </svg>
            </button>
          </div>
          <div className="flex flex-row items-center space-x-1 text-sm">
            <button className="action-link">
              <a
                href="./public/CV_MATHIEUSTROSBERG.pdf"
                target="_blank"
                alt="Mathieu Strosberg CV"
                rel="noopener noreferrer"
              >
                Curriculum vitae
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                viewBox="0 0 24 24"
              >
                <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:w-9/12 gap-10">
        <div className="flex flex-col gap-30 relative">
          <img
            className="rounded-3xl w-48 md:w-64 h-auto"
            src={profilePicture}
            alt="Portrait de Mathieu Strosberg"
          />
          <img
            className="absolute top-1/2 left-32 md:left-48 transform -translate-y-1/2 h-28 md:h-32 w-auto animate-spin-slow"
            src={Icon}
            alt=""
          />
        </div>

        <div>
          <h1 className="font-medium md:text-lg lg:text-xl">
            Mathieu Strosberg <div className="swinging-emoji ml-1">👋</div>
            <br />
            <span className="text-gray-500">
              Recherche Alternance <br />
              Concepteur Développeur en <br />
              Nouvelles Technologies RNCP 6
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
