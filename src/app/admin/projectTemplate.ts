import { Temporal } from 'temporal-polyfill';

import { ProjectType, StatusType, ToolType, VariantType } from "../components/types"

const placeholderImage = {
  url: "https://placehold.net/default.svg",
  alt: "Placeholder image for testing purposes"
}

const statusTemplate = {
  id: 1,
  name: "Status Name",
  color: "#2fffff"
} as StatusType

const variantTemplate = {
  id: 1,
  name: "Variant Name",
  color: "#2fffff"
} as VariantType

const templateTools = [
  { id: 1, name: "Tool 1", color: "#2fffff"},
  { id: 2, name: "Tool 2", color: "#2fffff"}
] as ToolType[]

export const templateProject = {
  id: 1,
  title: "TITLE",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  images: [placeholderImage],
  links: [{name: "Example", url: "https://example.com"}],
  creationDate: Temporal.PlainDate.from("2025-09-19"),
  insights: "SKILLS",
  tools: templateTools,
  status: statusTemplate,
  variant: variantTemplate
} as ProjectType