import Image from "next/image"
import Link from "next/link"

import { ProjectType } from "./types"
import formatDate from "../utils/formatDate"

export default function Project(project: ProjectType) {
  return (
    <section className="p-4 border rounded-lg bg-gray-100">
      <div className="flex flex-row">
        <div>
          <Bubble className="w-fit" text={project.variant} />

          <h2 className="text-xl">{project.title}</h2>
          <p className="text-xs">{formatDate(project.creationDate)}</p>
          <p>{project.description}</p>

          <div className="flex flex-row gap-2">
            {project.links.map((link, index) =>
              <Link className="text-blue-700 hover:underline decoration-blue-700" key={index} href={link.url}>{link.name || link.url}</Link>
            )}
          </div>

          <div className="flex flex-row gap-2 pt-2">
            {project.tools.map((tool) => (
              <Bubble key={tool.id} text={tool.name} style={{ backgroundColor: tool.color }} />
            ))}
          </div>
        </div>
        
        <div className="flex flex-col gap-4 ml-auto">
          <Bubble className="ml-auto" text={project.status} />
          
          {/* Eventually will want a carousel of images if multiple, if do multiple at all? */}
          <div className="flex flex-row gap-4">
            {project.images.map((image, index) =>
              <Image key={index} {...image} src={image.url} />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function Bubble({ text, className, style}: { text: string, className?: string, style?: React.CSSProperties }) {
  return (
    <div className={`px-1 border rounded-lg text-sm ${className}`} style={style}>
      {text}
    </div>
  )
}