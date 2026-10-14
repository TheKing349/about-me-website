'use client'

import Project from "@/src/components/Project"
import usePreviewProjectContext from './NewProjectContext'

export default function NewProjectPreview({ className }: {className?: string }) {
  const { previewProject } = usePreviewProjectContext()
  return (
    <div className={`${className}`}>
      <h1 className="text-2xl">Preview</h1>

      {previewProject && <Project className="mt-2" project={previewProject} />}
    </div>
  )
}