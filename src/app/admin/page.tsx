import Project from "../components/Project";
import { templateProject } from "./projectTemplate";

export default function Admin() {
  return (
    <section className="p-4">
      <Project project={templateProject} />
    </section>
  )
}