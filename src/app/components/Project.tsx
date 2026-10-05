import Image from "next/image"
import Link from "next/link"

import { ProjectType, StatusColors, VariantColors } from "./types"
import formatDate from "../utils/formatDate"

export default function Project(project: ProjectType) {
  return (
    <section className="p-4 border rounded-lg bg-gray-100">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="max-w-lg">
          <div className="flex flex-row gap-2">
            <Bubble className="w-fit" text={project.variant} style={{ backgroundColor: VariantColors[project.variant] }} />
            <Bubble className="md:hidden w-fit" text={project.status} style={{ backgroundColor: StatusColors[project.status] }} />
          </div>

          <h2 className="text-xl">{project.title}</h2>
          <p className="text-xs">{formatDate(project.creationDate)}</p>
          <p>{project.description}</p>

          <div className="flex flex-row gap-2">
            {project.links.map((link, index) => (
              <Link key={index} href={link.url}
                className="text-blue-700 hover:underline decoration-blue-700"
              >
                {link.name || link.url}
              </Link>
            ))}
          </div>

          <div className="flex flex-row gap-2 pt-2">
            {project.tools.map((tool) => (
              <Bubble key={tool.id} text={tool.name} style={{ backgroundColor: tool.color }} />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 md:ml-auto w-full md:w-auto">
          <Bubble className="hidden md:block md:ml-auto w-fit" text={project.status} style={{ backgroundColor: StatusColors[project.status] }} />

          <div className="flex flex-row justify-end gap-2 w-full md:w-auto">
            {project.images.map((image, index) => (
              <div key={index} className="relative aspect-square flex-1 min-w-0 md:flex-none md:w-40">
                <Image fill src={image.url} alt={image.alt} className="object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Bubble({ text, className, style}: { text: string, className?: string, style?: React.CSSProperties }) {
  return (
    <p className={`px-1 border rounded-lg text-sm ${className}`} style={style}>{text}</p>
  )
}