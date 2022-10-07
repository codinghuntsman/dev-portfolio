import React from "react";
import "./Progress.css";
import image from "../../../src/images/image-withbg.png";

const Progress = () => {
  return (
    <div id="progress">
      <div className="mt-10 lg:mt-16">
        <h1 className="uppercase text-lg md:text-xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-t from-indigo-400 to-green-500 font-extrabold tracking-widest skill-prog">
          Skill Progress
        </h1>
      </div>
      {/*-------------------------SKILL PROGRESS-------------------------*/}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-x-3">
        <div className="mt-3 md:ml-14 lg:ml-14 xl:ml-14 border p-3 rounded-md border-green-400">
          <div className="w-full bg-gray-200 rounded-full my-3">
            <div className="lg:py-1.5 bg-gradient-to-l from-green-500 to-blue-500 text-xs font-medium text-blue-100 text-center leading-none rounded-l-full rounded-r-full w-[270px] sm:w-[350px] md:w-[600px] lg:w-[500px]">
              HTML 80%
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full my-3">
            <div className="lg:py-1.5 bg-gradient-to-l from-green-500 to-blue-500 text-xs font-medium text-blue-100 text-center leading-none rounded-l-full rounded-r-full w-[250px] sm:w-[350px] md:w-[600px] lg:w-[480px]">
              CSS 75%
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full my-3">
            <div className="lg:py-1.5 bg-gradient-to-l from-green-500 to-blue-500 text-xs font-medium text-blue-100 text-center leading-none rounded-l-full rounded-r-full w-[270px] sm:w-[350px] md:w-[600px] lg:w-[500px]">
              REACT JS 80%
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full my-3">
            <div className="lg:py-1.5 bg-gradient-to-l from-green-500 to-blue-500 text-xs font-medium text-blue-100 text-center leading-none rounded-l-full rounded-r-full w-[150px] sm:w-[350px] md:w-[600px] lg:w-[310px]">
              JAVASCRIPT 40%
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full my-3">
            <div className="lg:py-1.5 bg-gradient-to-l from-green-500 to-blue-500 text-xs font-medium text-blue-100 text-center leading-none rounded-l-full rounded-r-full w-[270px] sm:w-[350px] md:w-[600px] lg:w-[500px]">
              REACT ROUTER 80%
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full my-3">
            <div className="lg:py-1.5 bg-gradient-to-l from-green-500 to-blue-500 text-xs font-medium text-blue-100 text-center leading-none rounded-l-full rounded-r-full w-[170px] sm:w-[350px] md:w-[600px] lg:w-[330px]">
              MONGO DB 50%
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full my-3">
            <div className="lg:py-1.5 bg-gradient-to-l from-green-500 to-blue-500 text-xs font-medium text-blue-100 text-center leading-none rounded-l-full rounded-r-full w-[170px] sm:w-[350px] md:w-[600px] lg:w-[330px]">
              EXPRESS JS 50%
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full my-3">
            <div className="lg:py-1.5 bg-gradient-to-l from-green-500 to-blue-500 text-xs font-medium text-blue-100 text-center leading-none rounded-l-full rounded-r-full w-[270px] sm:w-[350px] md:w-[600px] lg:w-[520px]">
              TAILWIND CSS 90%
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full my-3">
            <div className="lg:py-1.5 bg-gradient-to-l from-green-500 to-blue-500 text-xs font-medium text-blue-100 text-center leading-none rounded-l-full rounded-r-full w-[270px] sm:w-[350px] md:w-[600px] lg:w-[520px]">
              BOOTSTRAP 90%
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full my-3">
            <div className="lg:py-1.5 bg-gradient-to-l from-green-500 to-blue-500 text-xs font-medium text-blue-100 text-center leading-none rounded-l-full rounded-r-full w-[280px] sm:w-[350px] md:w-[600px] lg:w-[540px]">
              TAILWIND ELEMENTS 95%
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full my-3">
            <div className="lg:py-1.5 bg-gradient-to-l from-green-500 to-blue-500 text-xs font-medium text-blue-100 text-center leading-none rounded-l-full rounded-r-full w-[280px] sm:w-[350px] md:w-[600px] lg:w-[540px]">
              DAISY UI 95%
            </div>
          </div>
        </div>
        <div className="border p-3 rounded-md border-green-400 md:mr-14 lg:mr-14 xl:mr-14 mt-3">
          <div className="avatar mt-1">
            <div className="w-36 rounded-full">
              <img src={image} alt="me" />
            </div>
          </div>
          <div className="px-5">
            <h4 className="text-justify font-serif font-bold">
              Hi there!! I'm Md Sajedul Islam. I'm a ReactJS frontend developer
              also, I know the MERN stack web development and UI/UX design. I
              think you have already seen my skill progress. I know those skills
              that I have mentioned. if you would like to test my skill, you may
              give me a chance to test myself. and once you hire me I promise
              you, I will provide you with a pixel-perfect result.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
