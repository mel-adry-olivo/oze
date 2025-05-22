"use client";
import React from "react";
import { useRef } from "react";

export function useSectionRefs(sectionIds: string[]) {
  const refs = useRef(
    Object.fromEntries(
      sectionIds.map((id) => [id, React.createRef<HTMLDivElement>()])
    )
  );

  return refs.current;
}
