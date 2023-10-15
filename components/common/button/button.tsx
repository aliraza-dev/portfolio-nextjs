import Link from "next/link";
import React from "react";

interface ButtonProps {
  title: string;
  onClick?: () => void;
  blank?: boolean;
}

/**
 * Just a random button with blue borders.
 */
export default function Button({ title, onClick, blank }: ButtonProps) {
  return (
    <div>
      <Link
        href={"#"}
        onClick={onClick}
        className="p-4 ring ring-inset ring-primary-color hover:ring-gray-400 hover:text-gray-600  text-primary-color transition ease-in-out duration-500"
        target={blank ? "_blank" : undefined}
      >
        <span>{title}</span>
      </Link>
    </div>
  );
}
