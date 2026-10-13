'use client'

import { useActionState } from 'react'
import { submitContactForm, FormState } from '@/src/server/actions/submitForm.ts'

const initialState: FormState = {
  errors: {},
  message: null,
  success: false,
}

export default function NewProject() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState)
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