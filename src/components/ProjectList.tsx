import Project from "./Project";
import { ProjectType } from "./types";

export default function ProjectList({projects, className}: {projects?: ProjectType[], className?: string}) {
  return (
    <ul className={`flex flex-col p-4 gap-3 mb-auto grow ${className}`}>
      {projects?.map((project) => 
        <li key={project.id}>
          <Project project={project} />
        </li>
      )}
    </ul>
  )
}