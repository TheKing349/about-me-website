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
    <div>
      <form action={formAction}>
        {/* Title */}
        <div>
          <label>Title</label>
          <input name="title" type="text" placeholder="Project Title" required />
        </div>

        {/* Description */}
        <div>
          <label>Description</label>
          <textarea name="title" placeholder="Project Description" required />
        </div>

        {/* Creation Date */}
        <div>
          <label>Creation Date</label>
          <input type="date" id="birthDate" name="birthDate"
            // defaultValue={new Date().toISOString().split('T')[0]}
          />
        </div>

        {/* Variant Dropdown */}
        <div>
          <label>Variant</label>
          <select required defaultValue="">
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
          <label>Status</label>
          <select required defaultValue="">
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
          <label>Tools</label>
        </div>

        {/* Links */}
        <div>
          <label>Links</label>
          <button>Add Link</button>
        </div>

        {/* Images */}
        <div>
          <label>Images</label>
        </div>

        {/* Submit Button */}
        <button type="submit" disabled={isPending}>
          {isPending ? 'Adding project...' : 'Add Project'}
        </button>
      </form>
    </div>
  )
}