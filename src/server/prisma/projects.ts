import { db } from "./db.ts";
import { seed } from "./seed.ts";

import { ImageType, LinkType, ProjectType } from "../app/components/types.ts";

export { db };

/* TODO:
   Want to sort by something. Most likely newest first.
*/

export async function listProjects(): Promise<ProjectType[]> {
  await seed();
  const projects = await db.orm.public.Project
    .include("projectTools", (projectTools) =>
      projectTools.include("tool")
    )
    .include("status")
    .include("variant")
    .orderBy((p) => p.creationDate.desc())
    .all();

    return projects.map(
      ({ projectTools, statusId, variantId, ...project }): ProjectType => ({
        ...project,
        images: project.images as ImageType[],
        links: project.links as LinkType[],
        tools: projectTools.map(({ tool }) => tool),
      })
    );
}
