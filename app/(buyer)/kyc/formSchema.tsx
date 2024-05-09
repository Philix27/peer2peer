import { z } from "zod"

export const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Username must be at least 6 characters.",
  }),
  middleName: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  address: z.string().optional(),
  email: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  phone: z.string().min(11),
  dob: z.string().min(2, {
    message: "Select date of birth",
  }),
  bvn: z.string().min(11, {
    message: "ENter a valid BVN",
  }),
  nin: z.string().min(10, {
    message: "National Identity Number needed",
  }),
})

export const defaultValues: z.infer<typeof formSchema> = {
  firstName: "",
  lastName: "",
  middleName: "",
  email: "",
  dob: "",
  phone: "",
  bvn: "",
  nin: ""
}

export type IFormSchema = z.infer<typeof formSchema>
