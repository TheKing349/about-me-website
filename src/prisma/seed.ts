import { Temporal } from "temporal-polyfill";
import { connectDatabase, db } from "./db.ts";

const placeholderImage = {
  width: 50,
  height: 50,
  url: "https://placehold.net/default.svg",
  alt: "Placeholder image for testing purposes"
}

const creationDate = Temporal.PlainDate.from("2026-09-19")

const projects = [
  { id: 1, title: "One", desc: "Desc One", images: [placeholderImage], publishLink: "https://example.com", githubLink: "https://github.com/example/example-repo", creationDate: creationDate, insights: "SKILLS", tools: ["GitHub"]},
  { id: 2, title: "Two", desc: "Desc Two", images: [placeholderImage, placeholderImage], publishLink: "https://example.com", githubLink: "https://github.com/example/example-repo", creationDate: creationDate, insights: "SKILLS", tools: ["GitHub"]},
  { id: 3, title: "Three", desc: "Desc Three", images: [placeholderImage, placeholderImage, placeholderImage], publishLink: "https://example.com", githubLink: "https://github.com/example/example-repo", creationDate: creationDate, insights: "SKILLS", tools: ["GitHub"]},
];

let pendingSeed: Promise<void> | undefined;

async function runSeed(): Promise<void> {
  await connectDatabase();

  for (const project of projects) {
    await db.orm.public.Project.upsert({
      create: project,
      update: {},
      conflictOn: { id: project.id },
    });
  }
}

export function seed(): Promise<void> {
  pendingSeed ??= runSeed().catch((error: unknown) => {
    pendingSeed = undefined;
    throw error;
  });
  return pendingSeed;
}
