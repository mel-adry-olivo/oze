import { Separator } from "@/components/ui/separator";
import Sidebar from "@/components/sidebar";
import Rationale from "@/components/rationale";
import Objectives from "@/components/objectives";

export default function Home() {
  return (
    <div className="flex md:flex-row gap-4 relative">
      <div className="flex-1 flex flex-col gap-3 overflow-y-auto hide-scrollbar">
        <ProjectTitle />
        <Separator className="my-2 bg-neutral-300 max-w-prose" />
        <SystemTitle />
        <Separator className="my-4 bg-transparent" />
        <Rationale />
        <Separator className="my-2 bg-neutral-300 max-w-prose" />
        <Separator className="my-4 bg-transparent" />
        <Objectives />
      </div>
      <Sidebar />
    </div>
  );
}

function ProjectTitle() {
  return (
    <div className="flex flex-col md:flex-col md:gap-4 font-mono">
      <h1 className="text-4xl md:text-6xl font-semibold ">Online Portfolio</h1>
      <div className="flex flex-col justify-end">
        <h2 className="flex text-xs md:text-xs text-muted-foreground/50 ">
          Bagilidad, Calopez, De Guzman, Olivo, Talon, Ulgasan
        </h2>
        {/* <h3 className="flex text-xs md:text-sm text-muted-foreground ">
          `one-zero-eight`
        </h3> */}
      </div>
    </div>
  );
}

function SystemTitle() {
  return (
    <div className="max-w-prose">
      <h1 className="group text-md md:text-3xl font-medium text-muted-foreground/80 leading-normal">
        Hum-i (Humay): A Web and Mobile-Based
        <span className="text-foreground">
          &nbsp;Multi-Stage Data Acquisition and Analysis
        </span>{" "}
        in Rice Cultivation for Department of Agriculture - Western Visayas
      </h1>
    </div>
  );
}
