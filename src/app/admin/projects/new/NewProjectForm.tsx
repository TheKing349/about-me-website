'use client'

import { useEffect, useActionState } from 'react'

import { FormState } from '@/src/server/actions/submitForm.ts'
import { submitContactForm } from '@/src/server/actions/submitForm'
import usePreviewProjectContext from './NewProjectContext'
import { ProjectFormType } from '@/src/components/types'

const initialState: FormState = {
  errors: {},
  message: null,
  success: false,
}

export default function NewProjectForm({ className, newProjectForm }: {className?: string, newProjectForm: ProjectFormType }) {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState)
  const { formRef, populatePreviewProject } = usePreviewProjectContext()

  useEffect(() => {
    populatePreviewProject();
  }, []);

  return (
    <div className={`${className}`}>
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
            {/* TODO: Add ability to add a new Variant */}
            {newProjectForm.variants?.map((variant) => 
              <option key={variant.id} value={variant.name}>{variant.name}</option>
            )}
          </select>
        </div>

        {/* Status Dropdown */}
        <div>
          <label className="text-lg">Status: </label>
          <select className="ml-4" required defaultValue="" name="status">
            <option value="" disabled>-- Choose a Status --</option>
            {/* TODO: Add ability to add a new Status */}
            {newProjectForm.statuses?.map((status) =>
              <option key={status.id} value={status.name}>{status.name}</option>
            )}
          </select>
        </div>

        {/* Tools */}
        <div className="flex flex-col">
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
          {/* TODO: Option for importing image file */}
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
  )
}