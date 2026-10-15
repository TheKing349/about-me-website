'use client'

import { useActionState } from 'react'

import { FormState } from '@/src/server/actions/submitForm.ts'
import { submitContactForm } from '@/src/server/actions/submitForm'
import { ImageType, ProjectFormType, StatusType, ToolType, VariantType } from '@/src/components/types'
import Image from 'next/image'

const initialState: FormState = {
  errors: {},
  message: null,
  success: false,
}

export default function NewProjectForm({ className, newProjectForm }: { className?: string, newProjectForm: ProjectFormType }) {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState)

  return (
    <form action={formAction} className={`p-4 border rounded-lg bg-gray-100 ${className}`}>
      <div className="flex flex-col md:flex-row gap-2">
        <div className="flex flex-col max-w-lg">
          <div className="flex flex-row gap-2">
            <VariantDropdown variants={newProjectForm.variants} />
            <StatusDropdown statuses={newProjectForm.statuses} className="md:hidden" />
          </div>

          <input
            type="text"
            name="title"
            required
            placeholder="Project Title"
            className="pt-2 text-xl bg-transparent border-b border-gray-300 outline-none placeholder:text-gray-500"
          />

          <div>
            <input
              type="date"
              name="creationDate"
              required
              defaultValue={new Date().toISOString().split('T')[0]}
              className="mt-2 text-sm"
            />
          </div>

          <textarea
            name="description"
            required
            placeholder="Project description"
            rows={3}
            className="bg-transparent border-b border-gray-300 outline-none resize-y placeholder:text-gray-500"
          />

          <Links />
          <ToolDropdown tools={newProjectForm.tools} className="hidden md:flex md:mr-auto md:pt-4" />
          {/* TODO: Add links and tools inputs */}
        </div>

        <div className="flex flex-col gap-4 w-full md:ml-auto md:w-auto">
          <StatusDropdown statuses={newProjectForm.statuses} className="hidden md:block"/>
          <Images />
        </div>

        <ToolDropdown tools={newProjectForm.tools} className="md:hidden" />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="mt-4 px-3 py-1 border rounded-lg"
      >
        Create Project
      </button>
    </form>
  )
}

function VariantDropdown ({ className, variants }: { className?: string, variants: VariantType[] }) {
  return (
    <section className={`${className}`}>
      <label htmlFor="variantId" className="sr-only">Variant</label>
      <select
        id="variantId"
        name="variantId"
        required
        defaultValue=""
        className="w-fit px-1 border rounded-lg text-sm bg-gray-200"
      >
        <option value="" disabled>Choose variant</option>

        {variants.map((variant) => (
          <option key={variant.id} value={variant.id}>
            {variant.name}
          </option>
        ))}
      </select>
    </section>
  )
}

function StatusDropdown({ className, statuses }: { className?: string, statuses: StatusType[] }) {
  return (
    <section className={`ml-auto ${className}`}>
      <select
        id="statusId"
        name="statusId"
        required
        defaultValue=""
        className="w-fit px-1 border rounded-lg text-sm bg-gray-200 ml-auto"
      >
        <option value="" disabled>Choose status</option>

        {statuses.map((status) => (
          <option key={status.id} value={status.id}>
            {status.name}
          </option>
        ))}
      </select>
    </section>
  )
}

function ToolDropdown({ tools, className }: { tools: ToolType[], className?: string }) {
  return (
    <section className={`${className}`}>
      <select
        id="toolId"
        name="toolId"
        required
        defaultValue=""
        className="w-fit px-1 border rounded-lg text-sm bg-gray-200 ml-auto"
      >
        <option value="" disabled>Choose tool</option>

        {tools.map((tool) => (
          <option key={tool.id} value={tool.id}>
            {tool.name}
          </option>
        ))}
      </select>
    </section>
  )
}
function Links({ className }: { className?: string }) {
  return (
    <div className={`flex flex-col gap-2 md:flex-row ${className}`}>
      <input
        type="text"
        placeholder="Link name"
      />
      <input
        type="text"
        placeholder="https://example.com"
      />
    </div>
  )
}

function Images({ className }: { className?: string }) {
  return (
    <div className={`flex flex-row justify-end gap-2 w-full ${className}`}>
      <div className="relative aspect-square flex-1 md:w-40">
        <Image fill src="https://placehold.net/default.svg" alt="placeholder image" className="object-contain" />
      </div>
    </div>
  )
}