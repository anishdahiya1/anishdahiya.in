"use server";

import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10)
});

export async function submitContact(formData: FormData) {
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message")
  };

  const parsed = ContactSchema.safeParse(data);

  if (!parsed.success) {
    return { success: false, error: "Please double-check your details and try again." };
  }

  // TODO: Plug in email/CRM provider here.
  console.log("New contact request", parsed.data);

  return {
    success: true,
    message: "Thanks for reaching out! I'll get back to you within 48 hours."
  };
}
