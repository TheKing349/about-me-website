import { Temporal } from "temporal-polyfill"

import { ImageType, LinkType, ProjectType, StatusType, ToolType, VariantType } from "../app/components/types";

let placeholderImage: ImageType = {
  url: "https://placehold.net/default.svg",
  alt: "Placeholder image for testing purposes"
};

export const statuses: StatusType[] = [
  {id: 1, name: "Ongoing", color: "#22c55e"},
  {id: 2, name: "Discontinued", color: "#ef4444"},
  {id: 3, name: "Completed", color: "#3b82f6"},
];

export const variants: VariantType[] = [
  {id: 1, name: "Personal", color: "#22c55e"},
  {id: 2, name: "School", color: "#ef4444"},
  {id: 3, name: "Lunabotics", color: "#3b82f6"},
];

export const tools: ToolType[] = [
  { id: 1, name: "GitHub", color: "#c080f3" },
  { id: 2, name: "Unity", color: "#f3f4f6" },
  { id: 3, name: "C#", color: "#239120" },
  { id: 4, name: "React", color: "#61DAFB" },
  { id: 5, name: "TypeScript", color: "#3178C6" },
];

export const projects: ProjectType[] = [
  {
    id: 1,
    title: "One",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    images: [placeholderImage],
    links: [{name: null, url: "https://example.com"}],
    creationDate: Temporal.PlainDate.from("2025-09-19"),
    insights: "SKILLS",
    tools: [tools[0], tools[1]],
    status: statuses[0],
    variant: variants[0]
  },
  {
    id: 2,
    title: "Two",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    images: [placeholderImage, placeholderImage],
    links: [{name: "GitHub", url: "https://github.com/example/example-repo"}, {name: null, url: "https://example.com"}],
    creationDate: Temporal.PlainDate.from("2026-09-19"),
    insights: "SKILLS",
    tools: [tools[2]],
    status: statuses[1],
    variant: variants[1],
  },
  {
    id: 3,
    title: "Three",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    images: [placeholderImage, placeholderImage, placeholderImage],
    links: [{name: "GitHub", url: "https://github.com/example/example-repo"}, {name: "Example", url: "https://example.com"}],
    creationDate: Temporal.PlainDate.from("2026-09-20"),
    insights: "SKILLS",
    tools: [tools[3], tools[4]],
    status: statuses[2],
    variant: variants[2],
  },
  {
    id: 4,
    title: "Four",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    images: [],
    links: [{name: "GitHub", url: "https://github.com/example/example-repo"}, {name: "Example", url: "https://example.com"}],
    creationDate: Temporal.PlainDate.from("2026-09-21"),
    insights: "SKILLS",
    tools: [tools[3], tools[4]],
    status: statuses[2],
    variant: variants[2],
  },
];