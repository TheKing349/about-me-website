import { Temporal } from "temporal-polyfill"

export type ProjectType = {
  id: number,
  title: string,
  description: string,
  images: ImageType[],
  links: LinkType[],
  creationDate: Temporal.PlainDate,
  insights: string | null,
  tools: ToolType[],
  status: StatusType,
  variant: VariantType
}

export type ToolType = {
  id: number
  name: string,
  color: string
}

export type ImageType = {
  width: number,
  height: number,
  url: string,
  alt: string
}

export type LinkType = {
  name?: string | null,
  url: string
}

export type StatusType = {
  id: number
  name: string,
  color: string
}

export type VariantType = {
  id: number
  name: string,
  color: string
}