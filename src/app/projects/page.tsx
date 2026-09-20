import Navbar from "@/src/app/components/Navbar";
import Project from "@/src/app/components/Project"

export default function Projects() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-col p-4 gap-4 mb-auto grow">
        <Project />
        <Project />
        <Project />
      </div>
    </main>
  )
}
