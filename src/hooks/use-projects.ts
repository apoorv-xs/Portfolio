import { useMemo } from "react";
import { projects as fallback } from "@/data/projects";

export interface ProjectItem {
  title: string;
  description: string;
  image: string;
  url?: string;
}

export function useProjects() {
  // Static for now; just return the list. Adding to src/data/projects.ts will
  // automatically add a new card and flow into a new row thanks to CSS grid.
  const data = useMemo(() => fallback, []);
  return { projects: data, loading: false, error: null as string | null };
}
