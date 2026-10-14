'use client'

import { createContext, useContext, type ReactNode } from 'react'

import usePreviewProject from '@/src/hooks/usePreviewProjects'

const PreviewProjectContext = createContext<ReturnType<typeof usePreviewProject> | null>(null)

export function PreviewProjectProvider({ children }: { children: ReactNode }) {
  const previewProjectState = usePreviewProject()

  return (
    <PreviewProjectContext.Provider value={previewProjectState}>
      {children}
    </PreviewProjectContext.Provider>
  )
}

export default function usePreviewProjectContext() {
  const context = useContext(PreviewProjectContext)

  if (!context) {
    throw new Error(
      'usePreviewProjectContext must be used within PreviewProjectProvider',
    )
  }

  return context
}