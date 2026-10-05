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

export const StatusColors: Record<StatusType, string> = {
  ONGOING: "#22c55e",
  DISCONTINUED: "#ef4444",
  COMPLETED: "#3b82f6",
};

export const Variant = {
  PERSONAL: "PERSONAL",
  SCHOOL: "SCHOOL",
  LUNABOTICS: "LUNABOTICS"
}
export type VariantType = (typeof Variant)[keyof typeof Variant];

export const VariantColors: Record<VariantType, string> = {
  PERSONAL: "#22c55e",
  SCHOOL: "#ef4444",
  LUNABOTICS: "#3b82f6"
}