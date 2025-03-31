import React from "react";
import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface LoadingButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  loadingText?: string;
  children: React.ReactNode;
  className?: string;
}

export const LoadingButton: React.FC<LoadingButtonProps> = ({
  isLoading = false,
  loadingText = "Please wait...",
  children,
  className,
  ...props
}) => {
  return (
    <Button
      disabled={isLoading}
      className={cn("w-full flex items-center justify-center gap-2", className)}
      {...props}
    >
      {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
      {isLoading ? loadingText : children}
    </Button>
  );
};
