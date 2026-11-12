import { db } from "../db.ts";
import { seed } from "../seed.ts";

import { ImageType, LinkType, ProjectType } from "@/src/components/types.ts";

export { db };

export async function listProjects({ pinned = false } = {}): Promise<ProjectType[]> {
  await seed();

  const projects = await db.orm.public.Project
    .include("projectTools", (projectTools) =>
      projectTools.include("tool")
    )
    .include("status")
    .include("variant")
    .where((p) => p.pinned.eq(pinned))
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
