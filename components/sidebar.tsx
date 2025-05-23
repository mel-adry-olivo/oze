"use client";

import { ArrowUpRight } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const sidebarButtons = [
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
];

const Sidebar = () => {
  return (
    <aside className="w-2/6 hidden md:flex flex-col self-start sticky top-42 px-8">
      <ul className="flex flex-col gap-1 w-full items-end">
        <h1 className="pr-9 mb-2 font-bold text-lg">Contents</h1>
        {sidebarButtons.map((link) => (
          <SidebarItem key={link.name} {...link} />
        ))}
      </ul>
    </aside>
  );
};

type SidebarItemProps = {
  name: string;
  href: string;
  isActive?: boolean;
};

const SidebarItem = ({ name, href, isActive }: SidebarItemProps) => {
  return (
    <Button
      variant="link"
      className={`cursor-pointer md:text-sm font-normal hover:text-foreground ${
        isActive ? "text-foreground font-semibold" : "text-muted-foreground/80"
      }`}
      asChild
    >
      <Link href={href}>
        {name} <ArrowUpRight size={20} />
      </Link>
    </Button>
  );
};

export default Sidebar;
