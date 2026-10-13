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


        {/* Submit Button */}
        <button type="submit" disabled={isPending}>
          {isPending ? 'Adding project...' : 'Add Project'}
        </button>
      </form>
    </div>
  )
}