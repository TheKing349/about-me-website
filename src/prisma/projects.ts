import { db } from "./db.ts";
import { seed } from "./seed.ts";

export { db };

/* TODO:
   Want to sort by something. Most likely newest first.
*/

export async function listProjects() {
  await seed();
  const projects = await db.orm.public.Project
    .include("projectTools", (projectTools) =>
      projectTools.include("tool")
    )
    .orderBy((p) => p.creationDate.desc())
    .all();

  return projects.map(({ projectTools, ...project }) => ({
    ...project,
    tools: projectTools.map(({ tool }) => tool),
  }));
}
