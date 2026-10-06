import Project from "../components/Project";
import { templateProject } from "./projectTemplate";

export default function Admin() {
  return (
    <Project className="p-4" project={templateProject} />
  )
}