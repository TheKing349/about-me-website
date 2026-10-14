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
    
    // TODO: Get Status from available ones in db
    // Probably check if status change before calling to db
    const status: StatusType = {
      id: 0,
      name: String(formData.get("status")),
      color: "#22c55e"
    }
    
    // TODO: Get Status from available ones in db
    // Probably check if status change before calling to db
    const variant: VariantType = {
      id: 0,
      name: String(formData.get("variant")),
      color: "#3b82f6"
    }

    // TODO: Get Status from available ones in db
    // Probably check if status change before calling to db
    const toolsNames = formData.getAll("tools").map(String);

    const tools: ToolType[] = toolsNames.map((name, index) => ({
      id: index,
      name,
      color: "#3b82f6"
    }))

    // TODO: Errors out when user types `https://`
    const linkNames = formData.getAll("linkLabel").map(String);
    const linkUrls = formData.getAll("linkUrl").map(String);

    const links: LinkType[] = linkUrls.map((url, index) => ({
      url: url != "" ? (url.includes("https://") ? url : "https://" + url) : "",
      name: linkNames[index] ?? "",
    }))
    
    // TODO: Errors out when user types anything
    const imageUrls = formData.getAll("imageUrl").map(String);
    const imageAlts = formData.getAll("imageAlt").map(String);

    const images: ImageType[] = imageUrls.map((url, index) => ({
      url: url != "" ? url : "https://placehold.net/default.svg",
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
    <div className="flex flex-col p-4 md:flex-row">
      <div className="md:w-7/20">
        <h1 className="text-2xl">Add New Project</h1>

        <form className="mt-2" ref={formRef} onChange={populatePreviewProject} action={formAction}>
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
              <input name="linkLabel" type="text" placeholder="Link Title" />
              <input name="linkUrl" type="text" placeholder="Link URL" />
            </div>
            {/* TODO: Have button add new inputs */}
            <button className="mr-auto" type="button">Add Link</button>
          </div>

          {/* Images */}
          <div className="flex flex-col">
            <label className="text-lg">Images</label>
            <input name="imageUrl" type="text" placeholder="Image URL" />
            <input name="imageAlt" type="text" placeholder="Image Alt Text" />
          </div>

          {/* Submit Button */}
          <button type="submit" disabled={isPending}>
            {isPending ? 'Adding project...' : 'Add Project'}
          </button>
        </form>
      </div>

      <div className="mt-5 md:ml-5 md:w-7/10">
        <h1 className="text-2xl">Preview</h1>
        {previewProject && <Project project={previewProject} />}
      </div>
    </div>
  )
}