import Link from "next/link";
import React from "react";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Mutiple suspense",
    href: "/suspense-blocks",
  },
  {
    name: "One suspense",
    href: "/one-block",
  },
  {
    name: "Old way",
    href: "/old-way",
  },
];

export default function NavBar() {
  return (
    <nav className="flex gap-4 py-4 mx-auto max-w-5xl w-11/12">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-blue-600 hover:underline"
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
