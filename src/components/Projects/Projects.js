import React from "react";
import "./Projects.css";
import project1 from "../../../src/images/project1.png";
import project2 from "../../../src/images/front.png";
import project3 from "../../../src/images/project3.png";

const Projects = () => {
  return (
    <div className="bg-base-200 mx-3 md:mx-12 lg:mx-12 rounded-md pb-5" id="projects">
      <div>
        <h1 className="uppercase text-[22px] md:text-xl lg:text-4xl mt-20 text-transparent bg-clip-text bg-gradient-to-t from-indigo-400 to-green-500 font-extrabold tracking-widest projects">
          Projects
        </h1>
      </div>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 mt-2 md:ml-14 lg:ml-14 xl:ml-14 md:mr-14 lg:mr-14 xl:mr-14 p-3">
        <div className="border-0 lg:border lg:border-green-500 rounded-md p-5">
          <h1 className="text-xs md:text-sm lg:text-lg text-indigo-500 font-extrabold font-sans">HTML5, CSS3 & React.JS</h1>
          <img className="w-[360px] h-[300px] rounded-md" src={project2} alt="project1" />
          <div className="flex justify-center items-center mt-2">
            <div className="mr-2">
              <a
                className="btn btn-xs text-[10px] btn-outline rounded-md font-bold tracking-wider border text-indigo-500 border-indigo-500 hover:bg-indigo-500 hover:border-indigo-500 welcome"
                href="https://better-tomorrow-org.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                WEBSITE LINK
              </a>
            </div>
            <div>
              <a
                className="btn btn-xs text-[10px] btn-outline rounded-md font-bold tracking-wider border text-indigo-500 border-indigo-500 hover:bg-indigo-500 hover:border-indigo-500 welcome"
                href="https://github.com/mdsajedulislamdev/better-tomorrow"
                target="_blank"
                rel="noreferrer"
              >
                PROJECT CODE
              </a>
            </div>
          </div>
        </div>
        <div className="border-0 lg:border lg:border-green-500 rounded-md p-5">
          <h1 className="text-xs md:text-sm lg:text-lg text-indigo-500 font-extrabold font-sans">MERN Stack</h1>
          <small className="text-indigo-500 font-sans">Admin: sajedulislam@gmail.com Pass: 123456</small>
          <img className="w-[360px] h-[300px] rounded-md" src={project1} alt="project2" />
          <div className="flex justify-center items-center mt-2">
            <div className="mr-2">
              <a
                className="btn btn-xs text-[10px] btn-outline rounded-md font-bold tracking-wider border text-indigo-500 border-indigo-500 hover:bg-indigo-500 hover:border-indigo-500 welcome"
                href="https://a12-authentication-e469c.web.app/"
                target="_blank"
                rel="noreferrer"
              >
                WEBSITE LINK
              </a>
            </div>
            <div>
              <a
                className="btn btn-xs text-[10px] btn-outline rounded-md font-bold tracking-wider border text-indigo-500 border-indigo-500 hover:bg-indigo-500 hover:border-indigo-500 welcome"
                href="https://github.com/codinghuntsman/Doctors-portal-server"
                target="_blank"
                rel="noreferrer"
              >
                SERVER CODE
              </a>
            </div>
            <div className="ml-2">
              <a
                className="btn btn-xs text-[10px] btn-outline rounded-md font-bold tracking-wider border text-indigo-500 border-indigo-500 hover:bg-indigo-500 hover:border-indigo-500 welcome"
                href="https://github.com/codinghuntsman/Doctors-portal-client"
                target="_blank"
                rel="noreferrer"
              >
                CLIENT CODE
              </a>
            </div>
          </div>
        </div>
        <div className="border-0 lg:border lg:border-green-500 rounded-md p-5">
          <h1 className="text-xs md:text-sm lg:text-lg text-indigo-500 font-extrabold font-sans">MERN Stack</h1>
          <img className="w-[360px] h-[300px] rounded-md" src={project3} alt="project3" />
          <div className="flex justify-center items-center mt-2">
            <div className="mr-2">
              <a
                className="btn btn-xs text-[10px] btn-outline rounded-md font-bold tracking-wider border text-indigo-500 border-indigo-500 hover:bg-indigo-500 hover:border-indigo-500 welcome"
                href="https://student-info-with-crud.web.app"
                target="_blank"
                rel="noreferrer"
              >
                WEBSITE LINK
              </a>
            </div>
            <div>
              <a
                className="btn btn-xs text-[10px] btn-outline rounded-md font-bold tracking-wider border text-indigo-500 border-indigo-500 hover:bg-indigo-500 hover:border-indigo-500 welcome"
                href="https://github.com/codinghuntsman/CRUD-Operation-ServerCode"
                target="_blank"
                rel="noreferrer"
              >
                SERVER CODE
              </a>
            </div>
            <div className="ml-2">
              <a
                className="btn btn-xs text-[10px] btn-outline rounded-md font-bold tracking-wider border text-indigo-500 border-indigo-500 hover:bg-indigo-500 hover:border-indigo-500 welcome"
                href="https://github.com/codinghuntsman/CRUD-Operation-ClientCode"
                target="_blank"
                rel="noreferrer"
              >
                CLIENT CODE
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
