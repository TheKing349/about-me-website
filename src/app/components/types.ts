
export type Project = {
  title: String,
  description: String,
  images: Img[],
  publishLink: String | null,
  githubLink: String | null,
  creationDate: Date,
  insights: String | null,
  tools: String[]
}

export type Img = {
  width: Number,
  height: Number,
  url: String,
  alt: String
}
