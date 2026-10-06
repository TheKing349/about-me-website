import { connectDatabase, db } from "./db.ts";
import { projects, statuses, variants, tools } from "./seedData.ts"

let pendingSeed: Promise<void> | undefined;

async function runSeed(): Promise<void> {
  await connectDatabase();

  await upsertStatuses();
  await upsertVariants();
  await upsertTools();
  
  await upsertProjects();
}

async function upsertStatuses() {
  for (const status of statuses) {
    await db.orm.public.Status.upsert({
      create: status,
      update: {
        name: status.name,
        color: status.color,
      },
      conflictOn: {
        id: status.id,
      },
    });
  }
}

async function upsertVariants() {
  for (const variant of variants) {
    await db.orm.public.Variant.upsert({
      create: variant,
      update: {
        name: variant.name,
        color: variant.color,
      },
      conflictOn: {
        id: variant.id,
      },
    });
  }
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
    const { tools, status, variant, ...projectData } = project;

    const statusRecord = await db.orm.public.Status
      .where({ name: status.name })
      .first();

    const variantRecord = await db.orm.public.Variant
      .where({ name: variant.name })
      .first();

    if (!statusRecord) {
      throw new Error(`Status "${status.name}" does not exist`);
    }

    if (!variantRecord) {
      throw new Error(`Variant "${variant.name}" does not exist`);
    }

    await db.orm.public.Project.upsert({
      create: {
        ...projectData,
        statusId: statusRecord.id,
        variantId: variantRecord.id,
      },
      update: {
        ...projectData,
        statusId: statusRecord.id,
        variantId: variantRecord.id,
      },
      conflictOn: {
        id: project.id,
      },
    });

    for (const toolData of tools) {
      const tool = await db.orm.public.Tool
        .where({ name: toolData.name })
        .first();

      if (!tool) {
        throw new Error(`Tool "${toolData.name}" does not exist`);
      }

      await db.orm.public.ProjectTool.upsert({
        create: {
          projectId: project.id,
          toolId: tool.id,
        },
        update: {},
        conflictOn: {
          projectId: project.id,
          toolId: tool.id,
        },
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
