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
  variant: VariantType,
  pinned: boolean
}

export type ToolType = {
  id: number
  name: string,
  color: string
}

export type ImageType = {
  url: string,
  alt: string
}

export type LinkType = {
  name: string | null,
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

export type ProjectFormType = {
  statuses: StatusType[],
  variants: VariantType[],
  tools: ToolType[]
}

export type AboutMeType = {
  id: number,
  order: number,
  title?: string | null,
  text: string
}
