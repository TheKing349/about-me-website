import { connectDatabase, db } from "./db.ts";
import { projects, tools } from "./seedData.ts"

let pendingSeed: Promise<void> | undefined;

async function runSeed(): Promise<void> {
  await connectDatabase();

  await upsertTools();
  await upsertProjects();
}

async function upsertTools() {
  for (const tool of tools) {
    await db.orm.public.Tool.upsert({
      create: tool,
      update: { color: tool.color },
      conflictOn: { id: tool.id },
    });
  }
}

async function upsertProjects() {
  for (const project of projects) {
    const { tools, ...projectData } = project;

    await db.orm.public.Project.upsert({
      create: projectData,
      update: projectData,
      conflictOn: {
        id: project.id,
      },
    });

    for (const toolName of tools) {
      const tool = await db.orm.public.Tool
        .where({ name: toolName })
        .first();

      if (!tool) {
        throw new Error(`Tool "${toolName}" does not exist`);
      }

      await db.orm.public.ProjectTool.upsert({
        create: { projectId: project.id, toolId: tool.id },
        update: {},
        conflictOn: { projectId: project.id, toolId: tool.id },
      });
    }
  }
}

export function seed(): Promise<void> {
  pendingSeed ??= runSeed().catch((error: unknown) => {
    pendingSeed = undefined;
    throw error;
  });
  return pendingSeed;
}
