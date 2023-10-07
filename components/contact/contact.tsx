import React from "react";
import Button from "../common/button/button";

export default function Contact() {
  return (
    <div className="flex flex-col mt-20  mx-auto justify-center text-center">
      <div className="text-center justify-center w-full">
        <h1 className="text-5xl font-semibold text-center">Contact</h1>
      </div>

      <div className="mt-10">
        <Button title="Contact Me" />
      </div>
    </div>
  );
}
