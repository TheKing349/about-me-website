import Navbar from "@/src/components/Navbar";
import ProjectList from "../components/ProjectList";

const { listProjects } = await import("@/src/server/prisma/query/projects")
const pinnedProjects = await listProjects({pinned: true}).catch(() => undefined);

const { listAboutMes } = await import("@/src/server/prisma/query/aboutMes")
const aboutMes = await listAboutMes().catch(() => undefined);

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <div className="p-4 border-b">
        <h2 className="text-xl font-bold">About Me</h2>
        <ul className="flex flex-col gap-4 mb-auto grow">
          {aboutMes?.map((aboutMe) => 
            <li key={aboutMe.id}>
              {aboutMe.title && <h3 className="font-bold">{aboutMe.title}</h3>}
              <p className="whitespace-pre-line">{aboutMe.text}</p>
            </li>
          )}
        </ul>
      </div>

      <div className="p-4 mb-auto grow">
        <h2 className="text-xl font-bold">Highlighted Projects</h2>
        <ProjectList className="px-0" projects={pinnedProjects} />
      </div>
    </main>
  )
}
