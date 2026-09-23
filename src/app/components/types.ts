
export type ProjectType = {
  id: number,
  title: string,
  description: string,
  images: ImageType[],
  publishLink: string | null,
  githubLink: string | null,
  creationDate: Date,
  insights: string | null,
  tools: ToolType[]
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
