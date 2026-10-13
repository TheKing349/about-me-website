'use server'

import { z } from 'zod'

// Define validation rules using Zod
const schema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
})

// Define the state type for our form
export type FormState = {
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
  message?: string | null;
  success?: boolean;
}

export async function submitContactForm(prevState: FormState, formData: FormData): Promise<FormState> {
  // Extract data from the form
  const validatedFields = schema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  })

  // Return server-side errors if validation fails
  if (!validatedFields.success) {
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
