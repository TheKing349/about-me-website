import Image from "next/image"
import Link from "next/link"

import { ImageType, LinkType, ProjectType, StatusType, ToolType, VariantType } from "./types"
import formatDate from "../utils/formatDate"

export default function Project(project: ProjectType) {
  return (
    <section className="p-4 border rounded-lg bg-gray-100">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex flex-col max-w-lg">
          <div className="flex flex-row gap-2">
            <Variant variant={project.variant} />
            <Status status={project.status} className="md:hidden" />
          </div>

          <h2 className="text-xl">{project.title}</h2>
          <p className="text-xs">{formatDate(project.creationDate)}</p>
          <p>{project.description}</p>

          <Links links={project.links} />
          <Tools tools={project.tools} className="hidden md:flex md:mt-auto" />
        </div>

        <div className="flex flex-col gap-4 md:ml-auto w-full md:w-auto">
          <Status status={project.status} className="hidden md:block md:ml-auto"/>
          <Images images={project.images} />
        </div>

        <Tools tools={project.tools} className="md:hidden" />
      </div>
    </section>
  )
}

function Variant({ variant, className }: { variant: VariantType, className?: string }) {
  return (
    <Bubble
      className={`w-fit ${className}`}
      text={variant.name}
      style={{ backgroundColor: variant.color }}
    />
  )
}

function Status({ status, className }: { status: StatusType, className?: string }) {
  return (
    <Bubble
      className={`w-fit ${className}`}
      text={status.name}
      style={{ backgroundColor: status.color }}
    />
  )
}

function Links({ links, className }: { links: LinkType[], className?: string }) {
  return (
    <div className={`flex flex-row gap-2 ${className}`}>
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.url}
          className="text-blue-700 hover:underline decoration-blue-700"
        >
          {link.name || link.url}
        </Link>
      ))}
    </div>
  )
}

function Tools({ tools, className }: { tools: ToolType[], className?: string }) {
  return (
    <div className={`flex flex-row gap-2 ${className}`}>
      {tools.map((tool) => (
        <Bubble
          key={tool.id}
          text={tool.name}
          style={{ backgroundColor: tool.color }}
        />
      ))}
    </div>
  )
}

function Images({ images, className }: { images: ImageType[], className?: string }) {
  return (
    <div className={`flex flex-row justify-end gap-2 w-full ${className}`}>
      {images.map((image, index) => (
        <div key={index} className="relative aspect-square flex-1 md:w-40">
          <Image fill src={image.url} alt={image.alt} className="object-contain" />
        </div>
      ))}
    </div>
  )
}

function Bubble({ text, className, style}: { text: string, className?: string, style?: React.CSSProperties }) {
  return (
    <p className={`px-1 border rounded-lg text-sm ${className}`} style={style}>{text}</p>
  )
}
