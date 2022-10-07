/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FaFacebookSquare, FaGithub } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="mt-16">
      <footer className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 p-10 bg-base-200 text-base-content space-y-3">
        <div>
          <h5 className="footer-title text-left lg:text-center mb-0 font-serif">
            Services
          </h5>
          <div className="flex flex-row justify-center md:flex-row lg:flex-row space-x-3">
            <a
              className="link link-hover font-serif text-xs md:text-sm lg:text-base"
              href="#"
            >
              MERN Stack Development
            </a>
            <a
              className="link link-hover font-serif text-xs md:text-sm lg:text-base"
              href="#"
            >
              Frontend Development
            </a>
            <a
              className="link link-hover font-serif text-xs md:text-sm lg:text-base"
              href="#"
            >
              UI/UX Design
            </a>
            <a
              className="link link-hover font-serif text-xs md:text-sm lg:text-base"
              href="#"
            >
              ReactJS Development
            </a>
          </div>
        </div>
        <div>
          <h5 className="footer-title text-left lg:text-center mb-0 font-serif">
            Company
          </h5>
          <div className="flex flex-row lg:justify-center md:flex-row lg:flex-row space-x-3">
            <a
              className="link link-hover font-serif text-xs md:text-sm lg:text-base"
              href="#"
            >
              Future Owner
            </a>
            <a
              className="link link-hover font-serif text-xs md:text-sm lg:text-base"
              href="#"
            >
              About us
            </a>
            <a
              className="link link-hover font-serif text-xs md:text-sm lg:text-base"
              href="#"
            >
              Future Manager
            </a>
          </div>
        </div>
        <div>
          <h5 className="footer-title text-left lg:text-center mb-0">
            Copyright
          </h5>
          <div className="flex flex-row md:justify-center lg:justify-center md:flex-row lg:flex-row space-x-3">
            <h1 className="font-serif text-xs md:text-sm lg:text-base">
              Copyright &copy;2022 by Md Sajedul Islam's Portfolio
            </h1>
          </div>
        </div>
      </footer>
      <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
        <div className="">
          <h1 className="lg:text-xl sm:text-sm font-semibold tracking-widest portfolio">
            <span className="text-indigo-500">Portfolio</span>{" "}
            <span className="text-green-500">Private Limited</span>
          </h1>
        </div>
        <div className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://www.facebook.com/mdshajedul.islam"
              target="_blank"
              rel="noreferrer"
            >
              <span className="text-xl lg:text-4xl">
                <FaFacebookSquare />
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/md-sajedul-islam-a4b073241/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="text-xl lg:text-4xl">
                <AiFillLinkedin />
              </span>
            </a>
            <a
              href="https://github.com/codinghuntsman?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              <span className="text-xl lg:text-4xl">
                <FaGithub />
              </span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
