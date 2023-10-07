import Link from "next/link";
import React from "react";

/**
 * Just a random button with blue borders.
 */
export default function Button({ title }: { title: string }) {
  return (
    <div>
      <Link
        href={"#"}
        className="p-4 ring ring-inset ring-primary-color hover:ring-gray-400 hover:text-gray-600  text-primary-color transition ease-in-out duration-500"
      >
        <span>{title}</span>
      </Link>
    </div>
  );
}
