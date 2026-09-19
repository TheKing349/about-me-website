import { db } from "./db.ts";
import { seed } from "./seed.ts";

export { db };

export async function listProjects() {
  await seed();
  const projects = await db.orm.public.Project.select("id", "title", "desc", "images", "publishLink", "githubLink", "creationDate", "insights", "tools").all();
  return projects;
}

export type StarterProjects = Awaited<ReturnType<typeof listProjects>>[number];
