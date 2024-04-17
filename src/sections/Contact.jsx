import React from "react";

const ProfileDetails = () => {
  return (
    <div className="flex md:flex-row flex-col gap-10">
      <h2 className="flex flex-col h-100 w-5/12 gap-10 text-sm">Contact</h2>
      <div className="flex flex-col md:w-9/12 leading-7 gap-6 text-sm">
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
                href="https://github.com/mathieustrosberg"
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
                href="public/MATHIEU_STROSBERG_CV.pdf"
                download="MATHIEU_STROSBERG_CV.pdf"
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
        <div className="signal">
          <span className="blue-dot blink"></span>
          <p className="contact-title">Disponible dès maintenant</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
