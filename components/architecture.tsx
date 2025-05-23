import Image from "next/image";
import { Separator } from "./ui/separator";
import ArchitectureImage from "../public/architecture.png";

export const Architecture = () => {
  return (
    <article
      className="flex flex-col gap-5 max-w-prose scroll-mt-14"
      id="architecture"
    >
      <h1 className="section-title">Database Architecture</h1>
      <section className="space-y-3">
        <h4 className="text-base md:text-xl font-semibold text-foreground">
          Three-tier Architecture
        </h4>
        <p className="text-muted-foreground text-base">
          A three-tier architecture is used in this system because it provides
          better scalability, allowing the system to handle more users and data;
          enhanced security, by preventing direct client access to the database;
          and easier maintenance and development, as each part (user interface,
          business logic, data storage) can be updated or developed
          independently.
        </p>
      </section>
      <Separator className="my-1 bg-transparent" />
      <Image
        src={ArchitectureImage}
        alt="Architecture Image"
        className="opacity-70"
      />
    </article>
  );
};
