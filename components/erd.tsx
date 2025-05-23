"use client";

import Image from "next/image";
import { useState } from "react";
import ERDImage from "../public/erd.png";
import { MousePointerClick } from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "./ui/alert";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

export const ERD = () => {
  const [open, setOpen] = useState(false);

  return (
    <article className="flex flex-col gap-5 max-w-prose scroll-mt-14" id="erd">
      <h1 className="section-title">Entity Relationship Diagram</h1>

      <Alert>
        <MousePointerClick className="h-4 w-4" />
        <AlertTitle>Tip</AlertTitle>
        <AlertDescription>
          You can click on the image to view high resolution
        </AlertDescription>
      </Alert>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTitle>Entity Relationship Diagram</DialogTitle>
        <DialogTrigger asChild>
          <div
            className="m-1 p-8 border rounded-lg cursor-pointer"
            onClick={() => setOpen(true)}
          >
            <Image
              src={ERDImage}
              alt="Architecture Image"
              className="opacity-70"
              placeholder="blur"
            />
          </div>
        </DialogTrigger>
        <DialogContent className="h-[calc(100vh-2rem)] min-w-[calc(100vw-2rem)] overflow-auto flex justify-center items-center">
          <Image
            src={ERDImage}
            alt="High Resolution ERD"
            className="max-w-full max-h-full object-cover"
            placeholder="blur"
          />
        </DialogContent>
      </Dialog>
    </article>
  );
};
