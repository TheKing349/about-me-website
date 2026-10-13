'use client'

import { useRef, useState, useActionState, useEffect } from 'react'

import { ImageType, LinkType, ProjectType, StatusType, ToolType, VariantType } from '@/src/components/types'
import { submitContactForm, FormState } from '@/src/server/actions/submitForm.ts'
import Project from '@/src/components/Project'

const initialState: FormState = {
  errors: {},
  message: null,
  success: false,
}

export default function NewProject() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState)
  
  const formRef = useRef<HTMLFormElement>(null);

  const [previewProject, setPreviewProject] = useState<ProjectType | null>(null);

  useEffect(() => {
    populatePreviewProject();
  }, []);

  function populatePreviewProject() {
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);

    const title = String(formData.get("title") != "" ? formData.get("title") : "Project Title")
    const description = String(formData.get("description") != "" ? formData.get("description") : "Project description here")
    const creationDate = Temporal.PlainDate.from(String(formData.get("creationDate")))
    
    const status: StatusType = {
      id: 0,
      name: String(formData.get("status")),
      color: "#22c55e"
    }
    
    const variant: VariantType = {
      id: 0,
      name: String(formData.get("variant")),
      color: "#3b82f6"
    }

    const toolsNames = formData.getAll("tools").map(String);

    const tools: ToolType[] = toolsNames.map((name, index) => ({
      id: index,
      name,
      color: "#3b82f6"
    }))

    const linkNames = formData.getAll("linkLabel").map(String);
    const linkUrls = formData.getAll("linkUrl").map(String);

    const links: LinkType[] = linkUrls.map((url, index) => ({
      url,
      name: linkNames[index] ?? "",
    }))
    
    const imageUrls = formData.getAll("imageUrl").map(String);
    const imageAlts = formData.getAll("imageAlt").map(String);

    const images: ImageType[] = imageUrls.map((url, index) => ({
      url,
      alt: imageAlts[index] ?? ""
    }));

    const previewProject: ProjectType = {
      id: 1,
      title: title,
      description: description,
      images: images,
      links: links,
      creationDate: creationDate,
      insights: "",
      status: status,
      variant: variant,
      tools: tools
    };

    setPreviewProject(previewProject);
  }

  return (
    <div className="flex flex-row p-4">
      <div>
        <h1 className="text-2xl">Add New Project</h1>

        <form className="mt-4" ref={formRef} onChange={populatePreviewProject} action={formAction}>
          {/* Title */}
          <div className="flex flex-col">
            <label className="text-lg">Title</label>
            <input name="title" type="text" placeholder="Project Title" required />
          </div>

          {/* Description */}
          <div className="flex flex-col">
            <label className="text-lg">Description</label>
            <textarea name="description" placeholder="Project Description" required />
          </div>

          {/* Creation Date */}
          <div>
            <label className="text-lg">Creation Date: </label>
            <input type="date" id="creationDate" name="creationDate"
              defaultValue={new Date().toISOString().split('T')[0]}
            />
          </div>

          {/* Variant Dropdown */}
          <div>
            <label className="text-lg">Variant: </label>
            <select className="ml-4" required defaultValue="" name="variant">
              <option value="" disabled>-- Choose a Variant --</option>
              {/* TODO: Populate from available Variants */}
              {/* TODO: Add ability to add a new Variant */}
              <option value="lunabotics">Lunabotics</option>
              <option value="personal">Personal</option>
              <option value="school">School</option>
            </select>
          </div>

          {/* Status Dropdown */}
          <div>
            <label className="text-lg">Status: </label>
            <select className="ml-4" required defaultValue="" name="status">
              <option value="" disabled>-- Choose a Status --</option>
              {/* TODO: Populate from available Statuses */}
              {/* TODO: Add ability to add a new Status */}
              <option value="completed">Completed</option>
              <option value="ongoing">Ongoing</option>
              <option value="discontinued">Discontinued</option>
            </select>
          </div>

          {/* Tools */}
          <div>
            <label className="text-lg" htmlFor="tools">Tools</label>
            <select className="" required multiple name="tools">
              {/* TODO: Populate from available Tools */}
              {/* TODO: Add ability to add a new Tool */}
              {/* TODO: Better multiple select (checkboxes?) */}
              <option value="github">GitHub</option>
              <option value="unity">Unity</option>
              <option value="react">React</option>
            </select>
          </div>

          {/* Links */}
          <div className="flex flex-col">
            <label className="text-lg">Links</label>
            <div className="flex flex-row">
              <input name="link1_label" type="text" placeholder="Link Title" />
              <input name="link1_url" type="text" placeholder="Link URL" />
            </div>
            <button className="mr-auto" type="button">Add Link</button>
          </div>

          {/* Images */}
          <div className="flex flex-col">
            <label className="text-lg">Images</label>
          </div>

          {/* Submit Button */}
          <button type="submit" disabled={isPending}>
            {isPending ? 'Adding project...' : 'Add Project'}
          </button>
        </form>
      </div>

      <div>
        {previewProject && <Project project={previewProject} />}
      </div>
    </div>
  )
}