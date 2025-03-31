import * as z from "zod";

export const ClientLoginFormSchema = z.object({
  propertyCode: z
    .string({ message: "Property code is required!" })
    .min(2, { message: "Property Code should be minimum 02 characters" }),
  email: z
    .string({ message: "Email is required!" })
    .min(2, { message: "Please enter a valid email!" }),
  password: z
    .string({ message: "Password is required!" })
    .min(2, { message: "Password should be minimum 06 characters" }),
});
