'use client'

import { useRef, useState } from 'react'

import { ImageType, LinkType, ProjectType, StatusType, ToolType, VariantType } from '@/src/components/types'

export default function usePreviewProject() {
 
  const formRef = useRef<HTMLFormElement>(null);

  const [previewProject, setPreviewProject] = useState<ProjectType | null>(null);

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
      name: String(formData.get("status") != null ? formData.get("status") : "Status"),
      color: "#22c55e"
    }
    
    // TODO: Get Status from available ones in db
    // Probably check if status change before calling to db
    const variant: VariantType = {
      id: 0,
      name: String(formData.get("variant") != null ? formData.get("variant") : "Variant"),
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

  return { formRef, previewProject, populatePreviewProject };

}