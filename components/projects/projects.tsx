import React from "react";
import Project from "./project";

export default function Projects() {
  return (
    <div className="flex flex-col mt-20 w-full mx-auto text-dark-gray">
      <div className="text-center justify-center w-full">
        <h1 className="text-5xl font-semibold text-center">Projects</h1>
      </div>

      {/* Projects */}
      <div className="flex flex-col sm:flex-row w-full justify-between mt-10 gap-8">
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
}
