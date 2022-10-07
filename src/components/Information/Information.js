import React from "react";
import "./Information.css";
import { HiOutlineDownload } from "react-icons/hi";
import image from "../../images/image-withbg.png";

const Information = () => {
  return (
    <div className="mt-[120px]" id="home">
      <div class="card md:grid md:grid-cols-2 lg:card-side bg-base-100 shadow-xl">
        <div class="h-[150px] md:w-[400px] lg:w-[675px] ml-[60px] md:ml-10 lg:ml-40 md:mt-8 lg:mt-10">
          <h1 className="text-[15px] lg:text-[20px] font-extrabold text-transparent bg-clip-text bg-gradient-to-t from-indigo-500 to-green-400 tracking-widest text-left hello">
            Hello, my name is
          </h1>
          <h2 className="lg:text-4xl md:text-2xl text-[20px] font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-t from-indigo-400 to-green-500 text-left welcome">
            MD SAJEDUL ISLAM
          </h2>
          <h2 className="lg:text-[17.3px] md:text-xl text-[11px] font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-t from-indigo-400 to-green-500 text-left welcome">
            I'm a Frontend Web <span className="text-green-500">D</span>eveloper
            [ReactJS]
          </h2>
        </div>
        <div className="h-[350px] md:w-[200px] lg:w-[675px]">
          <figure>
            <img className="w-[290px]" src={image} alt="Album" />
          </figure>
        </div>
      </div>

      {/*------------------------------- Button Area----------------------------- */}
      <div className="flex justify-center space-x-1">
        <div className="mt-5">
          <a
            className="btn btn-xs sm:btn-sm md:btn-md text-xs lg:text-sm btn-outline rounded-md border text-indigo-500 border-indigo-500 hover:bg-indigo-500 font-bold hover:border-indigo-500 welcome"
            href="https://www.linkedin.com/in/md-sajedul-islam-a4b073241/"
            target="_blank"
            rel="noreferrer"
          >
            LINKEDIN
          </a>
        </div>
        <div className="mt-5">
          <a
            className="btn btn-xs sm:btn-sm md:btn-md text-xs lg:text-sm btn-outline rounded-md border text-indigo-500 border-indigo-500 hover:bg-indigo-500 font-bold hover:border-indigo-500 welcome"
            href="https://daisyui.com"
            target="_blank"
            rel="noreferrer"
          >
            <span className="text-[15px] mr-1">
              <HiOutlineDownload />
            </span>
            DOWNLOAD RESUME
          </a>
        </div>
        <div className="mt-5">
          <a
            className="btn btn-xs sm:btn-sm md:btn-md text-xs lg:text-sm btn-outline rounded-md border text-indigo-500 border-indigo-500 hover:bg-indigo-500 font-bold hover:border-indigo-500 welcome"
            href="https://github.com/codinghuntsman"
            target="_blank"
            rel="noreferrer"
          >
            GITHUB
          </a>
        </div>
      </div>
    </div>
  );
};

export default Information;
