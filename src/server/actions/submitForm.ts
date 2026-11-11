'use server'

import { z } from 'zod'

// Define validation rules using Zod
const schema = z.object({
  variantDropdown: z.array(z.string().refine((val) => val !== '' && !val.toString().includes("Choose")), {
    message: 'Please select a valid option (cannot be the default choice).',
  }),
  statusDropdown: z.array(z.string().refine((val) => val !== '' && !val.toString().includes("Choose")), {
    message: 'Please select a valid option (cannot be the default choice).',
  }),
  toolsDropdown: z.array(z.string().refine((val) => val !== '' && !val.toString().includes("Choose")), {
    message: 'Please select a valid option (cannot be the default choice).',
  }),
  title: z.string().min(4, { message: 'Project title must be at least 4 characters. '}),
  description: z.string().min(15, { message: 'Description must be at least 15 characters. '}),
  creationDate: z.iso.date(),
  linkNames: z.array(z.string()),
  linkUrls: z.array(z.url("Invalid URL format")),
  // imageUrls:  z.array(z.url("Invalid URL format")),
})

// Define the state type for our form
export type FormState = {
  errors?: {
    variantDropdown?: string[];
    statusDropdown?: string[];
    toolsDropdown?: string[];
    title?: string[];
    description?: string[];
    linkNames?: string[];
    linkUrls?: string[];
    imageUrls?: string[];
  };
  message?: string | null;
  success?: boolean;
}

export async function submitContactForm(prevState: FormState, formData: FormData): Promise<FormState> {
  // Extract data from the form
  const validatedFields = schema.safeParse({
    variantDropdown: formData.getAll("variantDropdown"),
    statusDropdown: formData.getAll("statusDropdown"),
    toolsDropdown: formData.getAll("toolsDropdown"),
    title: formData.get("title"),
    description: formData.get("description"),
    creationDate: formData.get("creationDate"),
    linkNames: formData.getAll("linkNames"),
    linkUrls: formData.getAll("linkUrls"),
    // imageUrls: formData.getAll("imageUrls"),
  })

  // Return server-side errors if validation fails
  if (!validatedFields.success) {
    console.log(validatedFields.error.flatten().fieldErrors)
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing or invalid fields.',
    };
  }

  try {
    // Perform database operations or call an external API here
    // e.g., await db.contact.create({ data: validatedFields.data })
    
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return {
      success: true,
      errors: {},
      message: 'Thank you! Your message has been sent successfully.',
    }
  } catch (error) {
    return {
      success: false,
      message: 'Something went wrong. Please try again later.',
    }
  }
}
