"use client";

import React from "react";
import Button from "../common/button/button";

function About() {
  const handleResumeDownload = () => {
    window.location.href = "../../misc/AliRazaResume.pdf";
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center w-full sm:w-[700px] mx-auto">
        <h1 className="text-lg sm:text-5xl font-semibold text-center text-dark-gray">
          Hi, Write good to become a{" "}
          <span className="text-primary-color">Programmer</span>
        </h1>

        <div className="my-4 sm:my-8 text-dark-gray text-center">
          <h2 className="text-4xl font-semibild">A Full stack developer</h2>
        </div>

        <div className="p-4 sm:p-0 my-4 items-center text-center text-dark-gray">
          <p className="items-center text-sm sm:text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero id
            ratione quia doloremque alias fugiat culpa deserunt, voluptatibus
            reprehenderit asperiores obcaecati unde recusandae ad voluptatum
            facilis nemo natus rerum aperiam.
          </p>
        </div>

        {/* Links */}
        <div className="mt-4">
          <Button title="Resume" onClick={handleResumeDownload} blank />
        </div>
      </div>
    </>
  );
}

export default About;
