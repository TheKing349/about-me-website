import Navbar from "@/src/components/Navbar";
import ProjectList from "@/src/components/ProjectList";

const { listProjects } = await import("@/src/server/prisma/query/projects")
const projects = await listProjects().catch(() => undefined);

export default function Projects() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <ProjectList projects={projects} />
    </main>
  )
}
