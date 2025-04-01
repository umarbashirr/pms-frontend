import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AdminHeader } from "../_components/AdminHeader";

const AdminLayout = async ({ children }: { children: React.ReactNode }) => {
  const token = (await cookies()).get("pms-token")?.value || "";

  if (!token) {
    redirect("/admin");
  }

  return (
    <div className="w-full h-full p-6 max-w-5xl mx-auto">
      <AdminHeader />
      <main className="border rounded-lg p-6 my-6">{children}</main>
    </div>
  );
};

export default AdminLayout;
