"use client";

import { Button } from "@/components/ui/button";
import { api } from "@/lib/axios";
import { IconInnerShadowTop } from "@tabler/icons-react";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const logout = async () => {
  const response = await api.post("/auth/admin/logout");
  return response.data;
};

export const AdminHeader = () => {
  const router = useRouter();

  const { mutate, isPending } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      // Clear any client-side storage
      localStorage.removeItem("auth-store");
      // Redirect to login page
      router.push("/admin");
      toast.success("Logged Out");
    },
    onError: (error) => {
      console.error("Logout failed:", error);
      toast.success("Logout failed");
    },
  });

  return (
    <header className="flex items-center justify-between px-6 border rounded-lg h-16">
      <div className="flex items-center gap-2">
        <IconInnerShadowTop className="!size-5" />
        <span className="text-base font-semibold">Acme Inc.</span>
      </div>
      <nav className="flex items-center gap-4">
        <Link href="/admin/dashboard" className="font-medium">
          Dashboard
        </Link>
        <Link href="/admin/properties" className="font-medium">
          Properties
        </Link>
        <Link href="/admin/users" className="font-medium">
          Users
        </Link>
      </nav>
      <div className="flex items-center gap-2">
        <Button asChild>
          <Link href="/admin/property">Create New Property</Link>
        </Button>
        <Button
          variant="destructive"
          onClick={() => mutate()}
          disabled={isPending}
        >
          {isPending ? "Logging out..." : "Logout"}
        </Button>
      </div>
    </header>
  );
};
