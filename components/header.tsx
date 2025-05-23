"use client";

import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const headerItems = [
  {
    name: "Title",
    href: "#title",
  },
  {
    name: "Rationale",
    href: "#rationale",
  },
  {
    name: "Objectives",
    href: "#objectives",
  },
  {
    name: "Database Architecture",
    href: "#architecture",
  },
  {
    name: "Entity Relationship Diagram",
    href: "#erd",
  },
  {
    name: "DB Fiddle",
    href: "#fiddle",
  },
];

const Header = () => {
  return (
    <header className="w-screen px-8 py-4 md:hidden flex-row  bg-background z-50">
      <ul className="flex flex-wrap gap-4">
        {headerItems.map((link) => (
          <HeaderItem key={link.name} {...link} />
        ))}
      </ul>
    </header>
  );
};

type HeaderItemProps = {
  name: string;
  href: string;
  isActive?: boolean;
};

const HeaderItem = ({ name, href, isActive }: HeaderItemProps) => {
  return (
    <Button
      variant="link"
      className={`cursor-pointer md:text-sm font-normal hover:text-foreground px-0 justify-start has-[>svg]:px-0 ${
        isActive ? "text-foreground font-semibold" : "text-muted-foreground/80"
      }`}
      asChild
    >
      <Link href={href} className="p-0">
        {name}
      </Link>
    </Button>
  );
};

export default Header;
