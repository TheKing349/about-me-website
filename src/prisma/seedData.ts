const placeholderImage = {
  width: 50,
  height: 50,
  url: "https://placehold.net/default.svg",
  alt: "Placeholder image for testing purposes"
}

const creationDate = Temporal.PlainDate.from("2026-09-19")

export const tools = [
  { id: 1, name: "GitHub", color: "#181717" },
  { id: 2, name: "Unity", color: "#000000" },
  { id: 3, name: "C#", color: "#239120" },
  { id: 4, name: "React", color: "#61DAFB" },
  { id: 5, name: "TypeScript", color: "#3178C6" },
];

export const projects = [
  {
    id: 1,
    title: "One",
    desc: "Desc One",
    images: [placeholderImage],
    publishLink: "https://example.com",
    githubLink: "https://github.com/example/example-repo",
    creationDate,
    insights: "SKILLS",
    tools: ["GitHub"],
  },
  {
    id: 2,
    title: "Two",
    desc: "Desc Two",
    images: [placeholderImage, placeholderImage],
    publishLink: "https://example.com",
    githubLink: "https://github.com/example/example-repo",
    creationDate,
    insights: "SKILLS",
    tools: ["GitHub", "Unity"],
  },
  {
    id: 3,
    title: "Three",
    desc: "Desc Three",
    images: [placeholderImage, placeholderImage, placeholderImage],
    publishLink: "https://example.com",
    githubLink: "https://github.com/example/example-repo",
    creationDate,
    insights: "SKILLS",
    tools: ["GitHub", "Unity", "C#"],
  },
];