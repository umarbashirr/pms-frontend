"use client";

import { FormInput } from "@/components/FormInput";
import { LoadingButton } from "@/components/LoadingButton";
import { Form } from "@/components/ui/form";
import { api } from "@/lib/axios";
import { ClientLoginFormSchema } from "@/schemas/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

export const LoginForm = () => {
  const form = useForm<z.infer<typeof ClientLoginFormSchema>>({
    resolver: zodResolver(ClientLoginFormSchema),
    defaultValues: {
      propertyCode: "",
      email: "",
      password: "",
    },
  });

  const formFields = [
    {
      control: form.control,
      name: "propertyCode",
      label: "Property Code",
      placeholder: "Enter your property code",
      type: "text",
      disabled: form.formState.isSubmitting,
    },
    {
      control: form.control,
      name: "email",
      label: "Email Address",
      placeholder: "Enter your email",
      type: "email",
      disabled: form.formState.isSubmitting,
    },
    {
      control: form.control,
      name: "password",
      label: "Password",
      placeholder: "Enter your password",
      type: "password",
      disabled: form.formState.isSubmitting,
    },
  ];

  const onFormSubmit = async (
    values: z.infer<typeof ClientLoginFormSchema>
  ) => {
    try {
      const response = await api.post("/auth/login", values);
      const result = response.data;

      if (response.status > 299) {
        throw new Error(result.error);
      }

      //   TODO:Save the token to Local Storage for persistance

      //   TODO: Route to property dashboard

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error(error.response.data.error);
      toast.error(error?.response?.data?.error || "Error while logging in");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onFormSubmit)} className="space-y-6">
        {formFields.map((formField) => (
          <FormInput
            key={formField.name}
            control={formField.control}
            name={formField.name}
            label={formField.label}
            placeholder={formField.placeholder}
            disabled={formField.disabled}
            type={formField.type}
          />
        ))}

        <LoadingButton
          loadingText="Please wait..."
          isLoading={form.formState.isSubmitting}
        >
          Login Now
        </LoadingButton>
      </form>
    </Form>
  );
};
