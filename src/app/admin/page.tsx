import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AdminLoginForm } from "./_components/AdminLoginForm";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const AdminLoginPage = async () => {
  const token = (await cookies()).get("pms-token")?.value || "";

  if (token) {
    redirect("/admin/dashboard");
  }

  return (
    <div className="w-full h-full min-h-screen p-6 flex items-center justify-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-lg">Login to your account</CardTitle>
          <CardDescription>
            Welcome Back! We are happy to see you again
          </CardDescription>
        </CardHeader>
        <CardContent>
          <AdminLoginForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLoginPage;
