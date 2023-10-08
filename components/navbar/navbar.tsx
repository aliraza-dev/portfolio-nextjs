import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="flex p-2 h-32 mx-auto justify-between">
      {/* Brand */}
      <div className="flex justify-center text-center items-center">
        <h3 className="font-montserrat text-xl ">
          <Link
            href={"#"}
            className="link !text-primary-color !font-bold"
          >{`<Ali Raza />`}</Link>
        </h3>
      </div>

      {/* Menu */}

      {/* <div className="flex text-center items-center">
        <ul className="flex">
          <li className="p-2">
            <Link href={"#"} className="link">
              projects
            </Link>
          </li>

          <li className="p-2">
            <Link href={"#"} className="link">
              skills
            </Link>
          </li>

          <li className="p-2">
            <Link href={"#"} className="link">
              contact
            </Link>
          </li>
        </ul>
      </div> */}
    </nav>
  );
}
