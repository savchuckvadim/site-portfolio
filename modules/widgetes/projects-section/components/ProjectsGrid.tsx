"use client";

import { memo } from "react";
import ProjectCard from "./ProjectCard";
import { Project } from "@/modules/entities/Projects/lib/util";



export const ProjectsGrid = memo(function ProjectsGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:gap-8">
      {projects.map((project) => (
        <ProjectCard key={`project-card-${project.id}`} project={project} />
      ))}
    </div>
  );
})

