import React from "react";
import image from "../../images/image-withbg.png";

const About = () => {
  return (
    <div id="about">
      <h2 className="text-[22px] md:text-xl lg:text-4xl tracking-wider text-transparent bg-clip-text bg-gradient-to-t from-indigo-400 to-green-500 font-extrabold lg:mt-10 welcome">
        ABOUT ME
      </h2>
      <div className="mt-3 mx-5 lg:mx-16">
        <div className="flex flex-col w-full md:flex-row lg:flex-row lg:gap-3">
          <div className="grid flex-grow h-[400px] md:w-40 lg:w-40 card bg-base-200 rounded-md place-items-center">
            <img className="w-[290px]" src={image} alt="me" />
          </div>
          <div className="divider lg:divider-horizontal font-sans">
            About Me
          </div>
          <div className="grid flex-grow h-[480px] md:h-[400px] lg:h-[400px]  md:w-40 lg:w-40 card bg-base-200 rounded-md place-items-center">
            <div>
              <h2 className="lg:text-[20px] md:text-md text-[15px] font-bold tracking-wider py-2 text-left ml-8 md:ml-16 lg:ml-10 welcome">
                <span className="text-indigo-500">Developer</span> &amp;{" "}
                <span className="text-green-500">Designer</span>
              </h2>
              <p className="text-justify md:text-xs lg:text-base px-7 md:px-7 lg:px-10 font-serif font-semibold">
                Hello ! my name is Md Sajedul Islam. I'm from Bangladesh. I have
                completed my graduation BSc in CSE at Atish Dipankar University
                of Science & Technology. I'm a ReactJS frontend web developer
                also, I know MERN stack web development. I have some skills in
                web development and UI/UX design, those skills I would like to
                implement in your project. if you would like to test me and test
                my skill. you may call me on the viva board and may test my
                skill. if Once you recruit me I will give you a pixel-perfect
                result. Thank you very much for reading me.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
