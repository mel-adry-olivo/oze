import { Separator } from "@/components/ui/separator";
import { rationale } from "@/lib/strings";

export default function Home() {
  return (
    <div className="flex flex-col gap-3">
      <ProjectTitle />
      <Separator className="my-2 bg-neutral-300" />
      <SystemTitle />
      <Separator className="my-4 bg-transparent" />
      <Rationale />
    </div>
  );
}

function ProjectTitle() {
  return (
    <div className="flex flex-col md:flex-row md:gap-4 md:items-center-safe ">
      <h1 className="text-4xl md:text-7xl font-semibold ">oze</h1>
      <div className="flex flex-col justify-between">
        <h2 className="flex text-xs md:text-xs text-muted-foreground ">
          or `one-zero-eight`
        </h2>
        <h3 className="flex text-xs font-semibold md:text-sm text-muted-foreground ">
          by maacro.
        </h3>
      </div>
    </div>
  );
}

function SystemTitle() {
  return (
    <h1 className="group text-md md:text-xl font-semibold hover:text-muted-foreground/60 transition-all">
      Hum-i (Humay): A Web and Mobile-Based
      <span className="group:hover:text-foreground group-hover:font-bold group-hover:text-[1.3rem] text-foreground transition-all">
        &nbsp;Multi-Stage Data Acquisition and Analysis
      </span>{" "}
      in Rice Cultivation for Department of Agriculture - Western Visayas
    </h1>
  );
}

function Rationale() {
  return (
    <article className="flex flex-col gap-4">
      <h1 className="text:base md:text-xl font-medium text-gray-900">
        Rationale
      </h1>
      <p className="text:sm md:text-base text-gray-600 tracking-wide leading-relaxed">
        Efficient agricultural data management is crucial for ensuring the
        sustainability and productivity of rice farming, particularly in the
        Western Visayas region. The existing technologies for data gathering in
        rice cultivation face challenges such as human error during data input,
        inconsistencies across collected data, and limited functionality in
        areas with poor or no internet connectivity. These issues lead to
        fragmented and delayed information, making it difficult for stakeholders
        to make timely and informed decisions. To address these challenges, the
        system focuses on building a centralized and synchronized database that
        supports offline-first data collection, error-free data collection
        through input validation and standardized formats, and integrates
        analytics for descriptive, comparative, and predictive insights.
      </p>

      <p className="text-sm md:text-base text-gray-600 tracking-wide leading-relaxed">
        The database architecture is designed to enable reliable storage,
        retrieval, and synchronization of data collected through mobile
        applications. Field agents can gather information on farmers' profiles,
        farming practices, crop conditions, and harvest results, even without
        internet connectivity. Once reconnected, the system automatically
        synchronizes the data with a centralized database accessible through a
        web dashboard.
      </p>

      <p className="text-sm md:text-base text-gray-600 tracking-wide leading-relaxed">
        This system makes sure that the data collected is accurate, easy to
        understand, and can be visualized using descriptive, comparative and
        predictive analysis. It helps the Department of Agriculture quickly
        access useful information. The database plays an important role in
        supporting smart decision-making and properly distributing resources for
        managing rice farming in the region.
      </p>
    </article>
  );
}
