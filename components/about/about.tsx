"use client";

import React, { useState } from "react";
import Button from "../common/button/button";
import Modal from "../modals/modal";

function About() {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      <div className="flex flex-col justify-center items-center w-[700px] mx-auto">
        <h1 className="text-5xl font-semibold text-center">
          Hi, Write good to become a{" "}
          <span className="text-primary-color">Programmer</span>
        </h1>

        <div className="my-8">
          <h2 className="text-4xl font-semibild">A Full stack developer</h2>
        </div>

        <div className="my-8 items-center">
          <p className="items-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero id
            ratione quia doloremque alias fugiat culpa deserunt, voluptatibus
            reprehenderit asperiores obcaecati unde recusandae ad voluptatum
            facilis nemo natus rerum aperiam.
          </p>
        </div>

        {/* Links */}
        <Button title="Resume" onClick={() => setShowModal(true)} />
      </div>

      {showModal && (
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          Some Modal Children
        </Modal>
      )}
    </>
  );
}

export default About;
