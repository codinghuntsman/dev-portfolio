import React from "react";

const ContactMe = () => {
  document.getElementById("resetForm")?.reset();
  return (
    <div className="mt-16 mx-2 md:mx-10 lg:mx-10" id="contact">
      <h1 className="skill-assessment uppercase text-lg md:text-xl lg:text-4xl mt-5 text-transparent bg-clip-text bg-gradient-to-t from-indigo-400 to-green-500 font-extrabold tracking-widest p-3 projects">
        CONTACT ME
      </h1>
      <div className="flex flex-col w-full lg:flex-row">
        <div className="grid flex-grow min-h-fit card bg-base-200 rounded-box place-items-center">
          <form
            id="resetForm"
            action="https://formsubmit.co/sajed.sobuj@gmail.com"
            method="POST"
          >
            <div className="hero">
              <div className="hero-content pt-0">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                  <div className="card-body">
                    <h1 className="text-[16px] md:text-sm lg:text-2xl font-extrabold font-serif text-transparent bg-clip-text bg-gradient-to-t from-indigo-400 to-green-600">
                      You may contact with me
                    </h1>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-sans font-bold">
                          Name
                        </span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-sans font-bold">
                          Email
                        </span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email address"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-sans font-bold">
                          Message
                        </span>
                      </label>
                      <textarea
                        className="border-2 border-gray-100 p-1"
                        name="message"
                        id="msg"
                        cols="2"
                        rows="2"
                        required
                      ></textarea>
                    </div>
                    <div className="form-control mt-2">
                      <button
                        type="Submit"
                        value="submit"
                        className="btn btn-accent"
                      >
                        SUBMIT
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="grid flex-grow min-h-fit card bg-base-200 rounded-box place-items-center">
          <div className="h-[350px]">
            <div>
              <h1 className="text-[16px] md:text-sm border border-green-500 p-2 rounded-md md:border-0 lg:border-0 lg:text-2xl font-extrabold tracking-wider mt-9 font-serif text-transparent bg-clip-text bg-gradient-to-t from-indigo-400 to-green-600">
                Certificate of achievement
              </h1>
            </div>
            <div className="relative top-24 lg:top-[80px]">
              <button className="btn-wide outline-double outline-4 hover:outline-lime-500 outline-offset-4">
                <a
                  className="btn btn-xs sm:btn-sm md:btn-md text-xs lg:text-sm btn-outline rounded-md border text-indigo-500 border-indigo-500 hover:bg-indigo-500 font-bold hover:border-indigo-500 tracking-wide welcome"
                  href="https://drive.google.com/file/d/17zo1vpLZ-DnP1QIZgOA93LoHt_pTKmLC/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  Click me for certificate
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;

<div
  className="min-h-[880px] sm:min-h-[650px] md:min-h-[650px] lg:min-h-[650px]"
  id="contact"
>
  <h1 className="skill-assessment uppercase text-lg md:text-xl lg:text-4xl mt-20 text-transparent bg-clip-text bg-gradient-to-t from-indigo-400 to-green-500 font-extrabold tracking-widest border border-green-500 p-1 rounded-md md:border-0 lg:border-0 xl:border-0 projects">
    CONTACT ME
  </h1>
  <div className="grid gap-2 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-2 md:ml-14 lg:ml-14 xl:ml-14 md:mr-14 lg:mr-14 xl:mr-16 p-3 h-[500px] border-0 lg:border lg:border-green-500 rounded-md">
    <form
      id="resetForm"
      action="https://formsubmit.co/sajed.sobuj@gmail.com"
      method="POST"
    >
      <div className="hero bg-base-100 border-0 lg:border border-green-500 rounded-md md:border-r-[6px] md:border-double md:border-r-green-500 lg:border-r-[6px] lg:border-double lg:border-green-500">
        <div className="hero-content pt-0">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <h1 className="text-[16px] md:text-sm lg:text-2xl font-extrabold font-serif text-transparent bg-clip-text bg-gradient-to-t from-indigo-400 to-green-600">
                CONTACT ME
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-sans font-bold">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-sans font-bold">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-sans font-bold">
                    Message
                  </span>
                </label>
                <textarea
                  className="border-2 border-gray-100 p-1"
                  name="message"
                  id="msg"
                  cols="2"
                  rows="2"
                  required
                ></textarea>
              </div>
              <div className="form-control mt-2">
                <button type="Submit" value="submit" className="btn">
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
    <div className="h-[470px] border-0 lg:border border-green-500 rounded-md md:border-l-[6px] md:border-double md:border-l-green-500 lg:border-l-[6px] lg:border-double lg:border-green-500">
      <div className="">
        <h1 className="text-[16px] md:text-sm border border-green-500 p-2 rounded-md md:border-0 lg:border-0 lg:text-2xl font-extrabold uppercase mt-9 font-serif text-transparent bg-clip-text bg-gradient-to-t from-indigo-400 to-green-600">
          Certificate of achievement
        </h1>
      </div>
      <div className="relative top-24 lg:top-[140px]">
        <button className="btn-wide outline-double outline-4 hover:outline-lime-500 outline-offset-4">
          <a
            className="btn btn-xs sm:btn-sm md:btn-md text-xs lg:text-sm btn-outline rounded-md border text-indigo-500 border-indigo-500 hover:bg-indigo-500 font-bold hover:border-indigo-500 tracking-wide welcome"
            href="https://drive.google.com/file/d/17zo1vpLZ-DnP1QIZgOA93LoHt_pTKmLC/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Click me for certificate
          </a>
        </button>
      </div>
    </div>
  </div>
</div>;
