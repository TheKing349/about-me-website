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

export const Status = {
  ONGOING: "ONGOING",
  DISCONTINUED: "DISCONTINUED",
  COMPLETED: "COMPLETED",
};

export type StatusType = (typeof Status)[keyof typeof Status];

export const VariantType = {
  PERSONAL: "PERSONAL",
  SCHOOL: "SCHOOL",
  LUNABOTICS: "LUNABOTICS"
}
export type VariantType = (typeof VariantType)[keyof typeof VariantType];
