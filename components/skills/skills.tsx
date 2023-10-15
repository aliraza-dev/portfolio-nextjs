import React from "react";

export default function Skills() {
  const skills = [
    "Javascript",
    "Nextjs",
    "AWS",
    "PHP",
    "Laravel",
    "SASS",
    "Tailwind",
    "CICD",
    "React",
    "NodeJS",
    "Redux",
    "Git",
    "ASANA",
    "JIRA",
  ];

  return (
    <div className="flex flex-col mt-20 w-full sm:w-[50%] mx-auto text-dark-gray">
      <div className="text-center justify-center w-full">
        <h1 className="text-5xl font-semibold text-center">Skills</h1>
      </div>

      <div className="mx-auto mt-10">
        <ul className="flex flex-wrap justify-center gap-4">
          {skills &&
            skills.map((skill, index) => (
              <li
                key={index}
                className="block w-auto p-4 text-center text-dark-gray shadow-lg shadow-gray-300 hover:-translate-y-2 transition ease-in-out duration-300 cursor-pointer"
              >
                {skill}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
