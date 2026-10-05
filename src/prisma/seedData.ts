import { Status, Variant } from "../app/components/types"

const placeholderImage = {
  url: "https://placehold.net/default.svg",
  alt: "Placeholder image for testing purposes"
}

const firstCreationDate = Temporal.PlainDate.from("2025-09-19")
const secondCreationDate = Temporal.PlainDate.from("2026-09-19")
const thirdCreationDate = Temporal.PlainDate.from("2026-09-20")

export const tools = [
  { id: 1, name: "GitHub", color: "#c080f3" },
  { id: 2, name: "Unity", color: "#f3f4f6" },
  { id: 3, name: "C#", color: "#239120" },
  { id: 4, name: "React", color: "#61DAFB" },
  { id: 5, name: "TypeScript", color: "#3178C6" },
];

export const projects = [
  {
    id: 1,
    title: "One",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    images: [placeholderImage],
    links: [{url: "https://example.com"}],
    creationDate: firstCreationDate,
    insights: "SKILLS",
    tools: ["GitHub", "Unity"],
    status: Status.COMPLETED,
    variant: Variant.PERSONAL
  },
  {
    id: 2,
    title: "Two",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    images: [placeholderImage, placeholderImage],
    links: [{name: "GitHub", url: "https://github.com/example/example-repo"}, {url: "https://example.com"}],
    creationDate: secondCreationDate,
    insights: "SKILLS",
    tools: ["C#", "Unity"],
    status: Status.ONGOING,
    variant: Variant.SCHOOL,
  },
  {
    id: 3,
    title: "Three",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    images: [placeholderImage, placeholderImage, placeholderImage],
    links: [{name: "GitHub", url: "https://github.com/example/example-repo"}, {name: "Example", url: "https://example.com"}],
    creationDate: thirdCreationDate,
    insights: "SKILLS",
    tools: ["React", "TypeScript"],
    status: Status.DISCONTINUED,
    variant: Variant.LUNABOTICS,
  },
];