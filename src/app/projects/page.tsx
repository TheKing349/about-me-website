import Navbar from "@/src/app/components/Navbar";
import Project from "@/src/app/components/Project"

const { listProjects } = await import("@/src/prisma/projects")
const projects = await listProjects().catch(() => undefined);

export default function Projects() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <ul className="flex flex-col p-4 gap-4 mb-auto grow">
        {projects?.map((project) => 
          <li key={project.id}>
            <Project {...project} description={project.desc} images={[...project.images]} tools={[...project.tools]} links={[...project.links]} />
          </li>
        )}
      </ul>
    </main>
  )
}
