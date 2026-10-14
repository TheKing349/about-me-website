'use client'

import { useRef, useState } from 'react'

import { ImageType, LinkType, ProjectFormType, ProjectType, StatusType, ToolType, VariantType } from '@/src/components/types'

export default function usePreviewProject() {
  const formRef = useRef<HTMLFormElement>(null);

  const [previewProject, setPreviewProject] = useState<ProjectType | null>(null);

  function populatePreviewProject({ newProjectForm }: { newProjectForm: ProjectFormType }) {
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);

    const title = String(formData.get("title") != "" ? formData.get("title") : "Project Title")
    const description = String(formData.get("description") != "" ? formData.get("description") : "Project description here")
    const creationDate = Temporal.PlainDate.from(String(formData.get("creationDate")))
    
    const status: StatusType = newProjectForm.statuses.find(
      status => status.name === String(formData.get("status"))
    ) || {
      id: -1,
      name: "Status",
      color: "#22c55e"
    }
    
    const variant: VariantType = newProjectForm.variants.find(
      variant => variant.name === String(formData.get("variant"))
    ) || {
      id: -1,
      name: "Variant",
      color: "#3b82f6"
    }

    const tools: ToolType[] = newProjectForm.tools.filter(
      tool => formData.getAll("tools").includes(tool.name)
    )

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

  return { formRef, previewProject, populatePreviewProject };
}