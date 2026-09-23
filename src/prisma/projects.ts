import { db } from "./db.ts";
import { seed } from "./seed.ts";

export { db };

export async function listProjects() {
  await seed();
  const projects = await db.orm.public.Project
    .include("projectTools", (projectTools) =>
      projectTools.include("tool")
    )
    .all();

  return projects.map(({ projectTools, ...project }) => ({
    ...project,
    tools: projectTools.map(({ tool }) => tool),
  }));
}
