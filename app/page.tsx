"use client";
import { Separator } from "@/components/ui/separator";
import Sidebar from "@/components/sidebar";
import { Rationale } from "@/components/rationale";
import Objectives from "@/components/objectives";
import { Architecture } from "@/components/architecture";
import { ERD } from "@/components/erd";

export default function Home() {
  return (
    <div className="flex md:flex-row gap-4 relative">
      <div className="flex-1 flex flex-col gap-3 overflow-y-auto hide-scrollbar">
        <ProjectTitle />
        <Separator className="my-2 bg-neutral-300 max-w-prose" />
        <Separator className="my-4 bg-transparent" />
        <Rationale />
        <Separator className="my-4 bg-transparent" />
        <Separator className="my-2 bg-neutral-300 max-w-prose" />
        <Separator className="my-4 bg-transparent" />
        <Objectives />
        <Separator className="my-4 bg-transparent" />
        <Separator className="my-2 bg-neutral-300 max-w-prose" />
        <Separator className="my-4 bg-transparent" />
        <Architecture />
        <Separator className="my-4 bg-transparent" />
        <Separator className="my-2 bg-neutral-300 max-w-prose" />
        <Separator className="my-4 bg-transparent" />
        <ERD />
      </div>
      <Sidebar />
    </div>
  );
}

function ProjectTitle() {
  return (
    <div className="flex flex-col md:flex-col md:gap-4 font-mono">
      <h1 className="text-4xl md:text-7xl font-semibold mb-4">
        Online Portfolio
      </h1>
      <div className="flex flex-col justify-end">
        <div className="max-w-prose">
          <h1 className="group text-md md:text-xl font-medium text-muted-foreground leading-normal mb-5">
            Hum-i (Humay): A Web and Mobile-Based Multi-Stage Data Acquisition
            and Analysis in Rice Cultivation for Department of Agriculture -
            Western Visayas
          </h1>
        </div>
        <h2 className="flex text-xs md:text-xs text-muted-foreground/50 ">
          Bagilidad, Calopez, De Guzman, Olivo, Talon, Ulgasan
        </h2>
        {/* <h3 className="flex text-xs mt-4 md:text-sm text-muted-foreground ">
          `one-zero-eight`
        </h3> */}
      </div>
    </div>
  );
}
