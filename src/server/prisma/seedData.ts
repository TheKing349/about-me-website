import { Temporal } from "temporal-polyfill"

import { AboutMeType, ImageType, LinkType, ProjectType, StatusType, ToolType, VariantType } from "@/src/components/types";

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
    variant: variants[0],
    pinned: true
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
    pinned: false
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
    pinned: false
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
    pinned: true
  },
];

export const aboutMes: AboutMeType[] = [
  {
    id: 1,
    order: 1,
    text: "I am a motivated student at the University of Nebraska-Lincoln, double majoring in Computer Science and Mathematics, with a Business minor. With experience in C, C++, C#, Java, SQL, Python, JavaScript, TypeScript, React, Next.js, and ROS2, I am a well-rounded programmer and engineer. (REWORD)"
  },
  {
    id: 2,
    order: 2,
    title: "Taekwondo",
    text: "TODO"
  },
  {
    id: 3,
    order: 3,
    title: "Lunabotics",
    text: "In addition to classes, (REWORD) I am also a member —— and lead apprentice —— for Lunabotics at UNL as a programmer. Here we build a robot for a competition where the robot digs dirt, navigates through an obstacle zone, and dumps the dirt. Programming is mainly involved with getting the robot to move and making it autonomous, completing the tasks by itself using sensors. \n\n Through my time in Lunabotics, I have strengthened my ability to work in a team-environment, ensuring maintainable code is written, deadlines are hit and learning how to solve complex problems, such as full autonomy on a robot."
  },
  {
    id: 4,
    order: 4,
    title: "Homelab",
    text: "Outside of university, I built and maintain a modest homelab, serving as cloud storage, password management, and a VPN provider. My setup consists of a 2015 Mac Mini, with external hard drives with redundancy for the main storage. I also have a Raspberry Pi 5 that acts as the VPN provider, as well as a backup for my main server."
  },
  {
    id: 5,
    order: 5,
    title: "Game Development",
    text: "I am very interested in game development. In my spare time, I make small video game prototypes to gain experience in game development. I primarily use C# with Unity, but am learning C++ in Unreal Engine as well."
  },
  {
    id: 6,
    order: 6,
    title: "And many more!",
    text: "I've built, hosted, and deployed modern, full-stack applications using React and Next.js (such as this one!), built and maintain a custom WSL Linux Kernel, and many others."
  }
]
