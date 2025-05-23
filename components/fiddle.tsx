import { ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export const Fiddle = () => {
  return (
    <article
      className="flex flex-col gap-5 max-w-prose scroll-mt-14 mb-48"
      id="fiddle"
    >
      <Button
        variant="link"
        className="has-[>svg]:px-0 items-start justify-start"
        asChild
      >
        <Link
          href="https://www.db-fiddle.com/f/mxhngFs26nRK7CgFdFpnND/4"
          className="section-title"
        >
          DB Fiddle <ArrowUpRight className="size-8 shrink-0" />
        </Link>
      </Button>
      <section className="space-y-3">
        <p className="text-muted-foreground text-base">
          Explore and interact with a live database environment using DB Fiddle
        </p>
      </section>
    </article>
  );
};
