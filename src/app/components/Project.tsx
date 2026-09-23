import Image from "next/image"
import { ProjectType, ToolType } from "./types"
import Link from "next/link"

export default function Project(project: ProjectType) {
  return (
    <section className="p-4 border rounded-lg bg-gray-100">
      <div className="flex flex-row">
        <div>
          <h2 className="text-xl">{project.title}</h2>
          <p className="text-xs">{project.creationDate.toString()}</p>
          <p>{project.description}</p>

          <div className="flex flex-row gap-2 pt-2">
            {project.links.map((link, index) =>
              <Link className="text-blue-700 hover:underline decoration-blue-700" key={index} href={link.url}>{link.name || link.url}</Link>
            )}
          </div>

          <div className="flex flex-row gap-2 pt-2">
            {project.tools.map((tool) => (
              <Tool key={tool.id} {...tool} />
            ))}
          </div>
        </div>
        
        {/* Eventually will want a carousel of images if multiple, if do multiple at all? */}
        <div className="flex flex-row gap-4 ml-auto">
          {project.images.map((image, index) =>
            <Image key={index} {...image} src={image.url} />
          )}
        </div>
      </div>
    </section>
  )
}

function Tool(tool: ToolType) {
  return (
    <div className="p-1 border rounded-lg bg-gray-300" style={{ backgroundColor: tool.color }}>
      {tool.name}
    </div>
  )
}