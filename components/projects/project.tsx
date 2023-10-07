import React from "react";

export default function Project() {
  return (
    <div className="p-8 mx-auto text-center shadow-lg shadow-gray-300 hover:-translate-y-2 transition ease-in-out duration-300 cursor-pointer">
      <h3 className="font-semibold text-2xl">Project</h3>

      <p className="my-2.5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
        provident odio iusto magni tempore.
      </p>

      <div className="flex justify-center gap-5 my-4 font-semibold">
        <p className="cursor-pointer">CSS</p>
        <p className="cursor-pointer">HTML</p>
        <p className="cursor-pointer">AWS</p>
      </div>

      <div></div>
    </div>
  );
}
