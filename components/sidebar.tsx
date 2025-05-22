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
];

const Sidebar = () => {
  return (
    <aside className="w-2/6 flex self-start sticky top-60 px-8">
      <ul className="flex flex-col gap-1 w-full items-end">
        {sidebarButtons.map((link) => {
          return <SidebarItem key={link.name} {...link} />;
        })}
      </ul>
    </aside>
  );
};

type SidebarItemProps = {
  name: string;
  href: string;
};

const SidebarItem = ({ name, href }: SidebarItemProps) => {
  return (
    <Button
      variant="link"
      className="cursor-pointer md:text-base font-normal text-muted-foreground/80 hover:text-foreground "
      asChild
    >
      <Link href={href}>
        {name} <ArrowUpRight size={20} />
      </Link>
    </Button>
  );
};

export default Sidebar;
