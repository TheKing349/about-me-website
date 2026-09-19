import { connectDatabase, db } from "./db.ts";

const projects = [
  { id: 1, title: "One", desc: "Desc One", image: "https://placehold.net/default.svg", publishLink: "https://example.com", githubLink: "https://github.com/example/example-repo", creationDate: "2026-09-19T16:24:00Z", insights: "SKILLS", tools: "GitHub"},
  { id: 2, title: "Two", desc: "Desc Two", image: "https://placehold.net/default.svg", publishLink: "https://example.com", githubLink: "https://github.com/example/example-repo", creationDate: "2026-09-19T16:24:00Z", insights: "SKILLS", tools: "GitHub"},
  { id: 3, title: "Three", desc: "Desc Three", image: "https://placehold.net/default.svg", publishLink: "https://example.com", githubLink: "https://github.com/example/example-repo", creationDate: "2026-09-19T16:24:00Z", insights: "SKILLS", tools: "GitHub"},
];

let pendingSeed: Promise<void> | undefined;

async function runSeed(): Promise<void> {
  await connectDatabase();
  console.log("CONNECT");

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
