"use client";

import React from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";

interface IFormInput {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any;
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  disabled: boolean;
  description?: string;
}

export const FormInput: React.FC<IFormInput> = ({
  control,
  name,
  label,
  placeholder = "",
  type = "text",
  disabled,
  description,
}) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              placeholder={placeholder}
              type={type}
              {...field}
              disabled={disabled}
            />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
