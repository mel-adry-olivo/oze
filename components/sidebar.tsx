"use client";

import { ArrowUpRight } from "lucide-react";
import React, { useEffect, useState } from "react";
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

const Sidebar = ({
  sectionRefs,
}: {
  sectionRefs: Record<string, React.RefObject<HTMLElement | null>>;
}) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0.1,
      }
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, [sectionRefs]);

  return (
    <aside className="w-2/6 hidden md:flex flex-col self-start sticky top-60 px-8">
      <ul className="flex flex-col gap-1 w-full items-end">
        <h1 className="pr-9 mb-2 font-bold text-lg">Contents</h1>
        {sidebarButtons.map((link) => (
          <SidebarItem
            key={link.name}
            {...link}
            isActive={activeId === link.href.substring(1)}
          />
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
      className={`cursor-pointer md:text-base font-normal hover:text-foreground ${
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
